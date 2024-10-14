const express = require('express');
const router = express.Router();
let Payment = require('../../Model/financeModel/PaymentModel');

// Middleware to parse JSON request bodies
router.use(express.json());
router.use(express.urlencoded({ extended: true }));

// Create - Add Payment .................................................
// POST: http://localhost:5000/payment/add
router.route('/add').post((req, res) => {
    console.log("Received data:", req.body);  // Log incoming data

    const {
        university,
        studentName,
        studentNumber,
        course,
        purpose,
        email,
        phone,
        amount,
        paymentMethod,
        fundTransferDetails,
        creditCardDetails,
    } = req.body;

    // Ensure required fields based on payment method
    if (paymentMethod === 'Fund Transfer' && (!fundTransferDetails || !fundTransferDetails.bankName || !fundTransferDetails.accountNumber)) {
        return res.status(400).send({ status: "Fund Transfer details are incomplete." });
    }
    
    if (paymentMethod === 'Credit Card' && (!creditCardDetails || !creditCardDetails.cardNumber || !creditCardDetails.securityCode)) {
        return res.status(400).send({ status: "Credit Card details are incomplete." });
    }

    // Create new payment object
    const newPayment = new Payment({
        university,
        studentName,
        studentNumber,
        course,
        purpose,
        email,
        phone,
        amount,
        paymentMethod,
        fundTransferDetails,
        creditCardDetails,
    });

    // Save to the database
    newPayment.save()
        .then(() => res.json('Payment added successfully!'))
        .catch((err) => {
            console.error(err);
            res.status(500).send({ status: "Error with adding payment", error: err.message });
        });
});

// Read - Get All Payments ...............................................
// GET: http://localhost:5000/payment/
router.route('/').get((req, res) => {
    Payment.find()
        .then((payments) => res.json(payments))
        .catch((err) => {
            console.error(err);
            res.status(500).send({ status: "Error with fetching payments", error: err.message });
        });
});

// Update - Edit Payment Details ..........................................
// PUT: http://localhost:5000/payment/update/:id
router.route('/update/:id').put(async (req, res) => {
    const paymentId = req.params.id;
    const updateData = req.body;

    // Ensure that necessary fields for payment method are included
    if (updateData.paymentMethod === 'Fund Transfer' && (!updateData.fundTransferDetails || !updateData.fundTransferDetails.bankName || !updateData.fundTransferDetails.accountNumber)) {
        return res.status(400).send({ status: "Fund Transfer details are incomplete." });
    }

    if (updateData.paymentMethod === 'Credit Card' && (!updateData.creditCardDetails || !updateData.creditCardDetails.cardNumber || !updateData.creditCardDetails.securityCode)) {
        return res.status(400).send({ status: "Credit Card details are incomplete." });
    }

    try {
        await Payment.findByIdAndUpdate(paymentId, updateData);
        res.status(200).send({ status: "Payment updated successfully" });
    } catch (err) {
        console.error(err);
        res.status(500).send({ status: "Error with updating payment", error: err.message });
    }
});

// Delete - Remove Payment .................................................
// DELETE: http://localhost:5000/payment/delete/:id
router.route('/delete/:id').delete(async (req, res) => {
    const paymentId = req.params.id;

    try {
        await Payment.findByIdAndDelete(paymentId);
        res.status(200).send({ status: "Payment deleted successfully" });
    } catch (err) {
        console.error(err);
        res.status(500).send({ status: "Error with deleting payment", error: err.message });
    }
});

// Get One Payment's Details ...............................................
// GET: http://localhost:5000/payment/get/:id
router.route('/get/:id').get(async (req, res) => {
    const paymentId = req.params.id;

    try {
        const payment = await Payment.findById(paymentId);
        res.status(200).send({ status: "Payment fetched successfully", payment });
    } catch (err) {
        console.error(err);
        res.status(500).send({ status: "Error with fetching payment", error: err.message });
    }
});

// Check if Student Number Exists ..........................................
// GET: http://localhost:5000/payment/check/:studentNumber
router.route('/check/:studentNumber').get(async (req, res) => {
    const studentNumber = req.params.studentNumber;

    try {
        const payment = await Payment.findOne({ studentNumber });
        res.status(200).json({ exists: !!payment });
    } catch (err) {
        console.error(err);
        res.status(500).send({ status: "Error with checking student number", error: err.message });
    }
});

module.exports = router;
