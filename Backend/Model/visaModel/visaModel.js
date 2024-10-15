const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const AutoIncrement = require('mongoose-sequence')(mongoose); // Import mongoose-sequence

const userSchema = new Schema({

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
    placeofbirth: {
        type: String,
        required: true,
    },
    nationality: {
        type: String,
        required: true,
    },
    passportnumber: {
        type: String, // Changed to String for better flexibility
        required: true,
    },
    passportissuedate: {
        type: Date,
        required: true,
    },
    passportexpirydate: {
        type: Date,
        required: true,
    },
    // contact information
    residetialaddress: {
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
    // travel details
    purposeofvisit: {
        type: String,
        required: true,
    },
    intendedduration: {
        type: Number,
        required: true,
    },
    addressinthedestination: {
        type: String,
        required: true,
    },
    arrivaldate: {
        type: Date,
        required: true,
    },
    depaturedate: {
        type: Date,
        required: true,
    },
    // education details
    schoolname: {
        type: String,
        required: true,
    },
    courseofstudy: {
        type: String,
        required: true,
    },
    studyduration: {
        type: Number,
        required: true,
    },
    schooladdress: {
        type: String,
        required: true,
    },
    // health
    medicalinsurance: {
        type: String,
        required: true,
    },
    healthdeclaration: {
        type: String,
        required: true,
    },
    accommodationdetails: {
        type: String,
        required: true,
    },
    travelitinerary: {
        type: String,
        required: true,
    },
    // declaration
    declaration: {
        type: String,
        required: true,
    },
    dateofapplication: {
        type: Date,
        required: true,
        default: Date.now, // Default to current date
    },
    signature: {
        type: String,
        required: true,
    },
    // Auto-incremented visaID field
    visaID: {
        type: Number,
        unique: true, // Ensure uniqueness
    }
});

// Apply the auto-increment plugin to visaID
userSchema.plugin(AutoIncrement, { inc_field: 'visaID' });


module.exports = mongoose.model("VisaApplication", userSchema);
