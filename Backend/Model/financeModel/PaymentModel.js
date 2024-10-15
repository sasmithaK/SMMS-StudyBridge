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
  paymentMethod: { type: String, required: true },  // e.g. 'Credit Card' or 'Fund Transfer'
  
  // Details for fund transfer (optional if payment method is Credit Card)
  fundTransferDetails: {
    bankName: { type: String, required: function() { return this.paymentMethod === 'Fund Transfer'; }},
    accountNumber: { type: String, required: function() { return this.paymentMethod === 'Fund Transfer'; }},
    accountHolderName: { type: String, required: function() { return this.paymentMethod === 'Fund Transfer'; }},
    branch: { type: String }
  },
  
  // Details for credit card (optional if payment method is Fund Transfer)
  creditCardDetails: {
    cardNumber: { type: String, required: function() { return this.paymentMethod === 'Credit Card'; }},
    expiryMonth: { type: String, required: function() { return this.paymentMethod === 'Credit Card'; }},
    expiryYear: { type: String, required: function() { return this.paymentMethod === 'Credit Card'; }},
    securityCode: { type: String, required: function() { return this.paymentMethod === 'Credit Card'; }},
    cardholderName: { type: String, required: function() { return this.paymentMethod === 'Credit Card'; }}
  },
}, {
  timestamps: true  // Automatically add createdAt and updatedAt fields
});

const Payment = mongoose.model("PaymentModel", PaymentSchema);
module.exports = Payment;
