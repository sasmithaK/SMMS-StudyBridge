const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const stuSchema = new Schema({

    // visa
    // personal information
    fullname: {
        type: String,
        required: true,
    },
    dob: {
        type: Date,
        required: true,
    },
    gender: {
        type: String,
        required: true,
    },
    countryresidence: {
        type: String,
        required: true,
    },
    nationality: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    phonenumber: {
        type: String, // Changed to String for better flexibility
        required: true,
    },
    emergencycontact: {
        type: String, // Changed to String for better flexibility
        required: true,
    },
   
});


module.exports = mongoose.model("DemoStu", stuSchema);
