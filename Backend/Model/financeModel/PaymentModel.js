const mongoose = require("mongoose");

const PaymentSchema = new mongoose.Schema({
  university: { type: String, required: true },
  studentName: { type: String, required: true },
  studentNumber: { type: String, required: true },
  course: { type: String, required: true },
  purpose: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  amount: { type: Number, required: true },
  paymentMethod: { type: String, required: true },
  fundTransferDetails: {
    bankName: String,
    accountNumber: String,
    accountHolderName: String,
    branch: String,
  },
  creditCardDetails: {
    cardNumber: String,
    expiryMonth: String,
    expiryYear: String,
    securityCode: String,
    cardholderName: String,
  },
});

const Payment = mongoose.model("PaymentModel", PaymentSchema);
module.exports = Payment;
