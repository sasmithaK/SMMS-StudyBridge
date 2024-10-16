const generateSummaryPDF = () => {
    const doc = new jsPDF();
    
    // Get current date and time
    const now = new Date();
    const formattedDate = now.toLocaleDateString(); // Format: MM/DD/YYYY (adjust if needed)
    const formattedTime = now.toLocaleTimeString(); // Format: HH:MM:SS AM/PM

    // Add title and styling
    doc.setFontSize(18);
    doc.text("Filtered Transaction Summary", 14, 20);

    // Add the generated date and time below the title
    doc.setFontSize(10);
    doc.setTextColor(100);
    doc.text(`Generated on: ${formattedDate} at ${formattedTime}`, 14, 28);

    // Header background color and text
    doc.setFillColor(211, 211, 211);
    doc.rect(14, 35, 182, 10, 'F'); // Light gray background for the table header
    doc.setFontSize(12);
    doc.setTextColor(40);
    doc.text("University", 16, 42);
    doc.text("Student Number", 70, 42);
    doc.text("Course", 115, 42);
    doc.text("Purpose", 150, 42);
    doc.text("Amount", 192, 42, { align: 'right' });

    // Set initial Y position for the first row of data
    let y = 52;

    // Iterate through the filtered transactions
    filteredTransactions.forEach((transaction, index) => {
        doc.setFontSize(11);
        doc.setFillColor(index % 2 === 0 ? 245 : 255); // Alternate row colors
        doc.rect(14, y - 5, 182, 10, 'F');
        
        // Handle long text with wrapping
        const courseText = doc.splitTextToSize(transaction.course, 30); 
        const purposeText = doc.splitTextToSize(transaction.purpose, 30);

        // Add transaction details with adjusted positions
        doc.text(transaction.university, 16, y);
        doc.text(transaction.studentNumber, 72, y); 
        doc.text(courseText, 115, y); 
        doc.text(purposeText, 150, y); 

        // Align amount to the right of the table
        doc.text(`$${transaction.amount.toFixed(2)}`, 192, y, { align: 'right' });

        y += 10; // Move Y position down for the next row
    });

    // Add a total amount summary at the bottom
    const totalAmount = filteredTransactions.reduce((sum, transaction) => sum + transaction.amount, 0);
    doc.setFontSize(12);
    doc.setFillColor(211, 211, 211);
    doc.rect(14, y - 5, 182, 10, 'F');
    doc.text("Total", 150, y);
    doc.text(`$${totalAmount.toFixed(2)}`, 192, y, { align: 'right' });

    // Save the PDF with a descriptive filename
    doc.save(`filtered_transaction_summary_${formattedDate}.pdf`);
};
