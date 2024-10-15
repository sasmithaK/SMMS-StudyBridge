import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import axios from 'axios';
import FinHeader from './FinHeader';
import Header from '../universityComponent/Header';

const MakePayment = () => {
  const [formData, setFormData] = useState({
    university: '',
    studentName: '',
    studentNumber: '',
    course: '',
    purpose: '',
    amount: '',
    email: '',
    phone: '',
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

  const [errors, setErrors] = useState({});

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

  const validateForm = () => {
    let formErrors = {};
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const phonePattern = /^\d{10,15}$/;
    const cardNumberPattern = /^\d{16}$/;
    const expiryMonthPattern = /^(0[1-9]|1[0-2])$/; // Validates MM (01-12)
    const expiryYearPattern = /^\d{2}$/; // Validates YY (e.g., 24 for 2024)
    const securityCodePattern = /^\d{3}$/; // Validates security code (3 digits)

    // Email validation
    if (!formData.email || !emailPattern.test(formData.email)) {
      formErrors.email = 'Please enter a valid email address.';
    }

    // Phone validation
    if (!formData.phone || !phonePattern.test(formData.phone)) {
      formErrors.phone = 'Please enter a valid phone number (10-15 digits).';
    }

    // Payment Method validation
    if (formData.paymentMethod === 'Credit Card') {
      if (!formData.creditCardDetails.cardNumber || !cardNumberPattern.test(formData.creditCardDetails.cardNumber)) {
        formErrors.cardNumber = 'Card number must be 16 digits.';
      }
      if (!formData.creditCardDetails.expiryMonth || !expiryMonthPattern.test(formData.creditCardDetails.expiryMonth)) {
        formErrors.expiryMonth = 'Expiry month must be valid (01-12).';
      }
      if (!formData.creditCardDetails.expiryYear || !expiryYearPattern.test(formData.creditCardDetails.expiryYear)) {
        formErrors.expiryYear = 'Expiry year must be valid (last two digits of year).';
      }
      if (!formData.creditCardDetails.securityCode || !securityCodePattern.test(formData.creditCardDetails.securityCode)) {
        formErrors.securityCode = 'Security code must be 3 digits.';
      }
    }

    if (formData.paymentMethod === 'Fund Transfer') {
      if (!formData.fundTransferDetails.bankName) {
        formErrors.bankName = 'Please provide the bank name for fund transfer.';
      }
      if (!formData.fundTransferDetails.accountNumber) {
        formErrors.accountNumber = 'Please provide the account number for fund transfer.';
      }
    }

    setErrors(formErrors);
    return Object.keys(formErrors).length === 0; // Return true if no errors
  };

  const handleProcessPayment = async (e) => {
    e.preventDefault();
    if (!validateForm()) {
      alert('Please correct the errors in the form.');
      return;
    }

    try {
      await axios.post('http://localhost:5000/payment/add', formData);
      alert('Payment processed successfully!');
      setFormData({
        university: '',
        studentName: '',
        studentNumber: '',
        course: '',
        purpose: '',
        amount: '',
        email: '',
        phone: '',
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
    <div>
      
      <Container>
      <FinHeader />
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
              isInvalid={!!errors.email}
              required
            />
            <Form.Control.Feedback type="invalid">
              {errors.email}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group controlId="phone">
            <Form.Label>Phone Number</Form.Label>
            <Form.Control
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              isInvalid={!!errors.phone}
              required
            />
            <Form.Control.Feedback type="invalid">
              {errors.phone}
            </Form.Control.Feedback>
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
                  isInvalid={!!errors.cardNumber}
                  required
                />
                <Form.Control.Feedback type="invalid">
                  {errors.cardNumber}
                </Form.Control.Feedback>
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
                      isInvalid={!!errors.expiryMonth}
                      required
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.expiryMonth}
                    </Form.Control.Feedback>
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
                      isInvalid={!!errors.expiryYear}
                      required
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.expiryYear}
                    </Form.Control.Feedback>
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
                      isInvalid={!!errors.securityCode}
                      required
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.securityCode}
                    </Form.Control.Feedback>
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
                  isInvalid={!!errors.bankName}
                  required
                />
                <Form.Control.Feedback type="invalid">
                  {errors.bankName}
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group controlId="accountNumber">
                <Form.Label>Account Number</Form.Label>
                <Form.Control
                  type="text"
                  name="accountNumber"
                  value={formData.fundTransferDetails.accountNumber}
                  onChange={handleFundTransferChange}
                  isInvalid={!!errors.accountNumber}
                  required
                />
                <Form.Control.Feedback type="invalid">
                  {errors.accountNumber}
                </Form.Control.Feedback>
              </Form.Group>
            </>
          )}

          <Button variant="primary" type="submit" className="mt-3">
            Process Payment
          </Button>
        </Form>
      </Container>
    </div>
  );
};

export default MakePayment;
