import React, { useEffect, useState } from "react";
import axios from "axios";
import jsPDF from "jspdf";
import { Container, Typography, Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, CircularProgress, Alert, Box } from "@mui/material";

function Transactions() {
    const [transactions, setTransactions] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

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
            <TableContainer component={Paper}>
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
                        {transactions.length > 0 ? (
                            transactions.map((transaction) => (
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
                                    No transactions available
                                </TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </TableContainer>
        </Container>
    );
}

export default Transactions;
