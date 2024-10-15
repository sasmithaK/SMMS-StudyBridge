import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";

function PaymentOptions() {
  const navigate = useNavigate();
  const location = useLocation();
  const { state } = location; // Retrieve the form data from MakePayment
  const [paymentMethod, setPaymentMethod] = useState("");
  const [fundTransferData, setFundTransferData] = useState({
    bankName: "",
    accountNumber: "",
    accountHolderName: "",
    branch: "",
  });

  const [creditCardData, setCreditCardData] = useState({
    cardNumber: "",
    expiryMonth: "",
    expiryYear: "",
    securityCode: "",
    cardholderName: "",
  });

  const [errors, setErrors] = useState({});

  const handlePaymentMethodChange = (e) => {
    setPaymentMethod(e.target.value);
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    if (paymentMethod === "fundTransfer") {
      setFundTransferData((prevState) => ({
        ...prevState,
        [id]: value,
      }));
    } else if (paymentMethod === "creditCard") {
      setCreditCardData((prevState) => ({
        ...prevState,
        [id]: value,
      }));
    }
  };

  const validate = () => {
    let tempErrors = {};
    let isValid = true;

    // Fund Transfer validations
    if (paymentMethod === "fundTransfer") {
      if (!fundTransferData.bankName) {
        tempErrors.bankName = "Bank name is required.";
        isValid = false;
      }
      if (!fundTransferData.accountNumber || !/^\d+$/.test(fundTransferData.accountNumber)) {
        tempErrors.accountNumber = "Valid account number is required.";
        isValid = false;
      }
      if (!fundTransferData.accountHolderName) {
        tempErrors.accountHolderName = "Account holder's name is required.";
        isValid = false;
      }
      if (!fundTransferData.branch) {
        tempErrors.branch = "Branch name is required.";
        isValid = false;
      }
    }

    // Credit Card validations
    if (paymentMethod === "creditCard") {
      if (!creditCardData.cardNumber || !/^\d{16}$/.test(creditCardData.cardNumber)) {
        tempErrors.cardNumber = "Valid 16-digit card number is required.";
        isValid = false;
      }
      if (!creditCardData.expiryMonth || !/^\d{2}$/.test(creditCardData.expiryMonth)) {
        tempErrors.expiryMonth = "Valid expiry month is required (MM).";
        isValid = false;
      }
      if (!creditCardData.expiryYear || !/^\d{2}$/.test(creditCardData.expiryYear)) {
        tempErrors.expiryYear = "Valid expiry year is required (YY).";
        isValid = false;
      }
      if (!creditCardData.securityCode || !/^\d{3}$/.test(creditCardData.securityCode)) {
        tempErrors.securityCode = "Valid 3-digit security code is required.";
        isValid = false;
      }
      if (!creditCardData.cardholderName) {
        tempErrors.cardholderName = "Cardholder name is required.";
        isValid = false;
      }
    }

    setErrors(tempErrors);
    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validate()) {
      const paymentDetails = {
        ...state, // Include the initial payment data from MakePayment
        paymentMethod,
        fundTransferDetails: paymentMethod === "fundTransfer" ? fundTransferData : {},
        creditCardDetails: paymentMethod === "creditCard" ? creditCardData : {},
      };

      try {
        const response = await axios.post('http://localhost:5000/payment/add', paymentDetails);
        console.log("Payment submitted successfully:", response.data);
        alert("Payment submitted successfully!");
        navigate("/transaction"); // Redirect to the transaction page
      } catch (error) {
        console.error("There was an error processing the payment!", error);
        alert("Payment submitted successfully:"); // Alert for error handling
        navigate("/transactions");
      }
    }
  };


  return (
    <div className="container py-5" style={{ maxWidth: "800px", margin: "auto" }}>
      <h1 className="text-center mb-5">Payment Options</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="paymentMethod" className="form-label text-primary">
            Select Payment Method
          </label>
          <select
            className="form-control"
            id="paymentMethod"
            value={paymentMethod}
            onChange={handlePaymentMethodChange}
          >
            <option value="">Select Payment Method</option>
            <option value="creditCard">Credit Card</option>
            <option value="fundTransfer">Fund Transfer</option>
          </select>
          {errors.paymentMethod && <small className="text-danger">{errors.paymentMethod}</small>}
        </div>

        {/* Conditional Fund Transfer Section */}
        {paymentMethod === "fundTransfer" && (
          <>
            <h3 className="text-center mb-4">Fund Transfer Details</h3>
            <div className="row mb-4">
              <div className="col-md-6">
                <label htmlFor="bankName" className="form-label text-primary">Bank Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="bankName"
                  value={fundTransferData.bankName}
                  onChange={handleChange}
                />
                {errors.bankName && <small className="text-danger">{errors.bankName}</small>}
              </div>
              <div className="col-md-6">
                <label htmlFor="branch" className="form-label text-primary">Branch</label>
                <input
                  type="text"
                  className="form-control"
                  id="branch"
                  value={fundTransferData.branch}
                  onChange={handleChange}
                />
                {errors.branch && <small className="text-danger">{errors.branch}</small>}
              </div>
            </div>

            <div className="row mb-4">
              <div className="col-md-6">
                <label htmlFor="accountNumber" className="form-label text-primary">Account Number</label>
                <input
                  type="text"
                  className="form-control"
                  id="accountNumber"
                  value={fundTransferData.accountNumber}
                  onChange={handleChange}
                />
                {errors.accountNumber && <small className="text-danger">{errors.accountNumber}</small>}
              </div>
              <div className="col-md-6">
                <label htmlFor="accountHolderName" className="form-label text-primary">Account Holder's Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="accountHolderName"
                  value={fundTransferData.accountHolderName}
                  onChange={handleChange}
                />
                {errors.accountHolderName && <small className="text-danger">{errors.accountHolderName}</small>}
              </div>
            </div>
          </>
        )}

        {/* Conditional Credit Card Section */}
        {paymentMethod === "creditCard" && (
          <>
            <div className="mb-3">
              <label htmlFor="cardNumber" className="form-label">Card Number</label>
              <input
                type="text"
                className="form-control"
                id="cardNumber"
                value={creditCardData.cardNumber}
                onChange={handleChange}
              />
              {errors.cardNumber && <small className="text-danger">{errors.cardNumber}</small>}
            </div>

            <div className="row mb-3">
              <div className="col">
                <label htmlFor="expiryMonth" className="form-label">Expiry Month</label>
                <input
                  type="text"
                  className="form-control"
                  id="expiryMonth"
                  placeholder="MM"
                  value={creditCardData.expiryMonth}
                  onChange={handleChange}
                />
                {errors.expiryMonth && <small className="text-danger">{errors.expiryMonth}</small>}
              </div>
              <div className="col">
                <label htmlFor="expiryYear" className="form-label">Expiry Year</label>
                <input
                  type="text"
                  className="form-control"
                  id="expiryYear"
                  placeholder="YY"
                  value={creditCardData.expiryYear}
                  onChange={handleChange}
                />
                {errors.expiryYear && <small className="text-danger">{errors.expiryYear}</small>}
              </div>
              <div className="col">
                <label htmlFor="securityCode" className="form-label">Security Code</label>
                <input
                  type="text"
                  className="form-control"
                  id="securityCode"
                  value={creditCardData.securityCode}
                  onChange={handleChange}
                />
                {errors.securityCode && <small className="text-danger">{errors.securityCode}</small>}
              </div>
            </div>

            <div className="mb-3">
              <label htmlFor="cardholderName" className="form-label">Cardholder Name</label>
              <input
                type="text"
                className="form-control"
                id="cardholderName"
                value={creditCardData.cardholderName}
                onChange={handleChange}
              />
              {errors.cardholderName && <small className="text-danger">{errors.cardholderName}</small>}
            </div>
          </>
        )}

        <div className="d-grid">
          <button type="submit" className="btn btn-primary btn-lg">
            Process Payment
          </button>
        </div>
      </form>
    </div>
  );
}

export default PaymentOptions;
