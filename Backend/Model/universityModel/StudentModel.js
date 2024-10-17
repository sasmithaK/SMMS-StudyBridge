const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const studentsSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    age: {
        type: Number,
        required: true,
    },
    contact: {
        type: Number,
        required: true,
    },
    university: { 
        type: String,
        required: true,
    }

});

module.exports = mongoose.model("appstudents", studentsSchema);
