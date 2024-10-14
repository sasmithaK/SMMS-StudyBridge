import React, { useEffect, useState } from "react";
import axios from "axios";
import jsPDF from "jspdf";
import {
    Container, Typography, Button, Table, TableBody, TableCell, TableContainer, TableHead, 
    TableRow, Paper, CircularProgress, Alert, Box, TextField
} from "@mui/material";
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";

function Transactions() {
    const [transactions, setTransactions] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [searchQuery, setSearchQuery] = useState("");

    useEffect(() => {
        const fetchTransactions = async () => {
            try {
                const response = await axios.get('http://localhost:5000/payment/');
                setTransactions(response.data);
            } catch (err) {
                setError("Error fetching transactions");
            } finally {
                setLoading(false);
            }
        };

        fetchTransactions();
    }, []);

    const handleDelete = async (id) => {
        try {
            await axios.delete(`http://localhost:5000/payment/delete/${id}`);
            setTransactions(transactions.filter(transaction => transaction._id !== id));
        } catch (err) {
            console.error("Error deleting transaction", err);
            setError("Error deleting transaction");
        }
    };

    const generatePDF = (transaction) => {
        const doc = new jsPDF();

        // Add title
        doc.setFontSize(18);
        doc.text("Payment Receipt", 20, 20);

        // Add transaction details
        doc.setFontSize(12);
        doc.text(`University: ${transaction.university}`, 20, 40);
        doc.text(`Student Number: ${transaction.studentNumber}`, 20, 50);
        doc.text(`Course: ${transaction.course}`, 20, 60);
        doc.text(`Purpose: ${transaction.purpose}`, 20, 70);
        doc.text(`Email: ${transaction.email}`, 20, 80);
        doc.text(`Phone: ${transaction.phone}`, 20, 90);
        doc.text(`Amount: $${transaction.amount}`, 20, 100);
        doc.text(`Payment Method: ${transaction.paymentMethod}`, 20, 110);

        // Save the PDF with the transaction ID as the filename
        doc.save(`receipt_${transaction._id}.pdf`);
    };

    const generateSummaryPDF = () => {
        const doc = new jsPDF();
        
        // Add title and styling
        doc.setFontSize(18);
        doc.text("Filtered Transaction Summary", 14, 20);
        doc.setFontSize(12);
        doc.setTextColor(40);
        doc.setDrawColor(0);
    
        // Header background color and text
        doc.setFillColor(211, 211, 211);
        doc.rect(14, 28, 182, 10, 'F'); // Light gray background for the table header
        doc.text("University", 16, 35);
        doc.text("Student Number", 70, 35);
        doc.text("Course", 115, 35);
        doc.text("Purpose", 150, 35);
        doc.text("Amount", 192, 35, { align: 'right' });
    
        // Set initial Y position for the first row of data
        let y = 45;
    
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
        doc.save('filtered_transaction_summary.pdf');
    };       
    

    const filteredTransactions = transactions.filter(transaction =>
        transaction.university.toLowerCase().includes(searchQuery.toLowerCase()) ||
        transaction.studentNumber.toLowerCase().includes(searchQuery.toLowerCase()) ||
        transaction.course.toLowerCase().includes(searchQuery.toLowerCase()) ||
        transaction.purpose.toLowerCase().includes(searchQuery.toLowerCase()) ||
        transaction.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
        transaction.phone.toLowerCase().includes(searchQuery.toLowerCase()) ||
        transaction.amount.toString().includes(searchQuery)
    );

    // Prepare data for the pie chart
    const pieData = filteredTransactions.reduce((acc, transaction) => {
        const existing = acc.find(item => item.name === transaction.university);
        if (existing) {
            existing.value += transaction.amount;
        } else {
            acc.push({ name: transaction.university, value: transaction.amount });
        }
        return acc;
    }, []);

    const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#AF19FF", "#EA3546"];

    if (loading) {
        return (
            <Box display="flex" justifyContent="center" mt={5}>
                <CircularProgress />
            </Box>
        );
    }

    if (error) {
        return (
            <Container>
                <Alert severity="error" sx={{ mt: 3 }}>{error}</Alert>
            </Container>
        );
    }

    return (
        <Container sx={{ py: 5 }}>
            <Typography variant="h4" align="center" gutterBottom>
                Transaction History
            </Typography>
            <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
                <TextField
                    label="Search Transactions"
                    variant="outlined"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    fullWidth
                    sx={{ mr: 2 }}
                />
                <Button
                    variant="contained"
                    color="primary"
                    onClick={generateSummaryPDF}
                >
                    Download Summary
                </Button>
            </Box>
            <TableContainer component={Paper} sx={{ mb: 3 }}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>University</TableCell>
                            <TableCell>Student Number</TableCell>
                            <TableCell>Course</TableCell>
                            <TableCell>Purpose</TableCell>
                            <TableCell>Email</TableCell>
                            <TableCell>Phone</TableCell>
                            <TableCell>Amount</TableCell>
                            <TableCell>Actions</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {filteredTransactions.length > 0 ? (
                            filteredTransactions.map((transaction) => (
                                <TableRow key={transaction._id}>
                                    <TableCell>{transaction.university}</TableCell>
                                    <TableCell>{transaction.studentNumber}</TableCell>
                                    <TableCell>{transaction.course}</TableCell>
                                    <TableCell>{transaction.purpose}</TableCell>
                                    <TableCell>{transaction.email}</TableCell>
                                    <TableCell>{transaction.phone}</TableCell>
                                    <TableCell>{transaction.amount}</TableCell>
                                    <TableCell>
                                        <Button
                                            variant="contained"
                                            color="error"
                                            size="small"
                                            onClick={() => handleDelete(transaction._id)}
                                        >
                                            Delete
                                        </Button>
                                        <Button
                                            variant="contained"
                                            color="primary"
                                            size="small"
                                            sx={{ ml: 2 }}
                                            onClick={() => generatePDF(transaction)}
                                        >
                                            Receipt
                                        </Button>
                                    </TableCell>
                                </TableRow>
                            ))
                        ) : (
                            <TableRow>
                                <TableCell colSpan={8} align="center">
                                    No transactions found
                                </TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </TableContainer>
            {pieData.length > 0 && (
                <Box display="flex" justifyContent="center" mb={5}>
                    <PieChart width={500} height={400}>
                        <Pie
                            data={pieData}
                            cx="50%"
                            cy="50%"
                            outerRadius={150}
                            fill="#8884d8"
                            dataKey="value"
                            label
                        >
                            {pieData.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                        </Pie>
                        <Tooltip />
                        <Legend />
                    </PieChart>
                </Box>
            )}
        </Container>
    );
}

export default Transactions;
