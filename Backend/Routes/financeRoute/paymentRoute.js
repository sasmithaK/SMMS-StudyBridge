const router = require('express').Router();
let Payment = require('../Models/financeModel/PaymentModel');

// create - add payment ..............................................
// http://localhost:5000/payment/add
router.route('/add').post((req, res) => {
    const {
        university, studentName, studentNumber, course, purpose,
        email, phone, amount, paymentMethod,
        fundTransferDetails, creditCardDetails
    } = req.body;

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
        creditCardDetails
    });

    // Save the new payment
    newPayment.save().then(() => {
        res.json('Payment added successfully!');
    }).catch((err) => {
        console.log(err);
        res.status(500).send({ status: "Error with adding payment", error: err.message });
    });
});

// read - get all payments .............................................
// http://localhost:5000/payment/
router.route('/').get((req, res) => {
    Payment.find().then((payments) => {
        res.json(payments);
    }).catch((err) => {
        console.log(err);
        res.status(500).send({ status: "Error with fetching payments", error: err.message });
    });
});

// update - edit payment details .........................................
// http://localhost:5000/payment/update/:id
router.route('/update/:id').put(async (req, res) => {
    let paymentId = req.params.id;

    const {
        university, studentName, studentNumber, course, purpose,
        email, phone, amount, paymentMethod,
        fundTransferDetails, creditCardDetails
    } = req.body;

    const updatePayment = {
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
        creditCardDetails
    };

    // Update payment details
    await Payment.findByIdAndUpdate(paymentId, updatePayment).then(() => {
        res.status(200).send({ status: "Payment updated successfully" });
    }).catch((err) => {
        console.log(err);
        res.status(500).send({ status: "Error with updating payment", error: err.message });
    });
});

// delete - remove payment ...............................................
// http://localhost:5000/payment/delete/:id
router.route('/delete/:id').delete(async (req, res) => {
    let paymentId = req.params.id;

    await Payment.findByIdAndDelete(paymentId).then(() => {
        res.status(200).send({ status: "Payment deleted successfully" });
    }).catch((err) => {
        console.log(err.message);
        res.status(500).send({ status: "Error with deleting payment", error: err.message });
    });
});

// get one payment's details .............................................
// http://localhost:5000/payment/get/:id
router.route('/get/:id').get(async (req, res) => {
    let paymentId = req.params.id;

    await Payment.findById(paymentId).then((payment) => {
        res.status(200).send({ status: "Payment fetched successfully", payment });
    }).catch((err) => {
        console.log(err.message);
        res.status(500).send({ status: "Error with fetching payment", error: err.message });
    });
});

// check if student number exists .............................................
// http://localhost:5000/payment/check/:studentNumber
router.route('/check/:studentNumber').get(async (req, res) => {
    const studentNumber = req.params.studentNumber;

    try {
        const payment = await Payment.findOne({ studentNumber: studentNumber });

        if (payment) {
            res.status(200).json({ exists: true });
        } else {
            res.status(200).json({ exists: false });
        }
    } catch (err) {
        console.log(err.message);
        res.status(500).send({ status: "Error with checking student number", error: err.message });
    }
});


module.exports = router;
