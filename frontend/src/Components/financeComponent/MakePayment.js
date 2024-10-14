import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import axios from 'axios';

const MakePayment = () => {
    const [formData, setFormData] = useState({
        university: '',
        studentName: '',
        studentNumber: '',
        course: '',
        purpose: '',
        amount: '',
        email: '',  // Added email field
        phone: '',  // Added phone field
        paymentMethod: '',
        creditCardDetails: {
            cardNumber: '',
            expiryMonth: '',
            expiryYear: '',
            securityCode: '',
            cardholderName: '',
        },
        fundTransferDetails: {
            bankName: '',
            accountNumber: '',
        },
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handlePaymentMethodChange = (e) => {
        const { value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            paymentMethod: value,
        }));
    };

    const handleCreditCardChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            creditCardDetails: {
                ...prevData.creditCardDetails,
                [name]: value,
            },
        }));
    };

    const handleFundTransferChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            fundTransferDetails: {
                ...prevData.fundTransferDetails,
                [name]: value,
            },
        }));
    };

    const handleProcessPayment = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:5000/payment/add', formData);
            alert('Payment processed successfully!');
            // Reset form after successful submission
            setFormData({
                university: '',
                studentName: '',
                studentNumber: '',
                course: '',
                purpose: '',
                amount: '',
                email: '',  // Reset email field
                phone: '',  // Reset phone field
                paymentMethod: '',
                creditCardDetails: {
                    cardNumber: '',
                    expiryMonth: '',
                    expiryYear: '',
                    securityCode: '',
                    cardholderName: '',
                },
                fundTransferDetails: {
                    bankName: '',
                    accountNumber: '',
                },
            });
        } catch (error) {
            console.error('Error processing payment:', error);
            alert('There was an error processing your payment. Please try again.');
        }
    };

    return (
        <Container>
            <h2 className="my-4">Make Payments</h2>
            <Form onSubmit={handleProcessPayment}>
                {/* Payment Form Fields */}
                <Form.Group controlId="university">
                    <Form.Label>University / Institute</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Select University"
                        name="university"
                        value={formData.university}
                        onChange={handleChange}
                        required
                    />
                </Form.Group>

                <Row>
                    <Col>
                        <Form.Group controlId="studentName">
                            <Form.Label>Student Name</Form.Label>
                            <Form.Control
                                type="text"
                                name="studentName"
                                value={formData.studentName}
                                onChange={handleChange}
                                required
                            />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group controlId="studentNumber">
                            <Form.Label>Student Number</Form.Label>
                            <Form.Control
                                type="text"
                                name="studentNumber"
                                value={formData.studentNumber}
                                onChange={handleChange}
                                required
                            />
                        </Form.Group>
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <Form.Group controlId="course">
                            <Form.Label>Course</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Select Course"
                                name="course"
                                value={formData.course}
                                onChange={handleChange}
                                required
                            />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group controlId="purpose">
                            <Form.Label>Purpose of Payment</Form.Label>
                            <Form.Control
                                type="text"
                                name="purpose"
                                value={formData.purpose}
                                onChange={handleChange}
                                required
                            />
                        </Form.Group>
                    </Col>
                </Row>

                {/* New Fields for Email and Phone */}
                <Form.Group controlId="email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </Form.Group>

                <Form.Group controlId="phone">
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control
                        type="text"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                    />
                </Form.Group>

                <Form.Group controlId="amount">
                    <Form.Label>Payment Amount</Form.Label>
                    <Form.Control
                        type="number"
                        name="amount"
                        value={formData.amount}
                        onChange={handleChange}
                        required
                    />
                </Form.Group>

                {/* Payment Options */}
                <h2 className="my-4">Payment Options</h2>
                <Form.Group controlId="paymentMethod">
                    <Form.Label>Select Payment Method</Form.Label>
                    <Form.Control
                        as="select"
                        name="paymentMethod"
                        value={formData.paymentMethod}
                        onChange={handlePaymentMethodChange}
                        required
                    >
                        <option value="">Select Payment Method</option>
                        <option value="Credit Card">Credit Card</option>
                        <option value="Fund Transfer">Fund Transfer</option>
                    </Form.Control>
                </Form.Group>

                {formData.paymentMethod === 'Credit Card' && (
                    <>
                        <Form.Group controlId="cardNumber">
                            <Form.Label>Card Number</Form.Label>
                            <Form.Control
                                type="text"
                                name="cardNumber"
                                value={formData.creditCardDetails.cardNumber}
                                onChange={handleCreditCardChange}
                                required
                            />
                        </Form.Group>

                        <Row>
                            <Col>
                                <Form.Group controlId="expiryMonth">
                                    <Form.Label>Expiry Month</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="MM"
                                        name="expiryMonth"
                                        value={formData.creditCardDetails.expiryMonth}
                                        onChange={handleCreditCardChange}
                                        required
                                    />
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group controlId="expiryYear">
                                    <Form.Label>Expiry Year</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="YY"
                                        name="expiryYear"
                                        value={formData.creditCardDetails.expiryYear}
                                        onChange={handleCreditCardChange}
                                        required
                                    />
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group controlId="securityCode">
                                    <Form.Label>Security Code</Form.Label>
                                    <Form.Control
                                        type="password"
                                        name="securityCode"
                                        value={formData.creditCardDetails.securityCode}
                                        onChange={handleCreditCardChange}
                                        required
                                    />
                                </Form.Group>
                            </Col>
                        </Row>

                        <Form.Group controlId="cardholderName">
                            <Form.Label>Cardholder Name</Form.Label>
                            <Form.Control
                                type="text"
                                name="cardholderName"
                                value={formData.creditCardDetails.cardholderName}
                                onChange={handleCreditCardChange}
                                required
                            />
                        </Form.Group>
                    </>
                )}

                {formData.paymentMethod === 'Fund Transfer' && (
                    <>
                        <Form.Group controlId="bankName">
                            <Form.Label>Bank Name</Form.Label>
                            <Form.Control
                                type="text"
                                name="bankName"
                                value={formData.fundTransferDetails.bankName}
                                onChange={handleFundTransferChange}
                                required
                            />
                        </Form.Group>
                        <Form.Group controlId="accountNumber">
                            <Form.Label>Account Number</Form.Label>
                            <Form.Control
                                type="text"
                                name="accountNumber"
                                value={formData.fundTransferDetails.accountNumber}
                                onChange={handleFundTransferChange}
                                required
                            />
                        </Form.Group>
                    </>
                )}

                <Button variant="primary" type="submit" className="mt-3">
                    Process Payment
                </Button>
            </Form>
        </Container>
    );
};

export default MakePayment;
