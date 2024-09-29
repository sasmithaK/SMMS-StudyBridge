const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const courseSchema = new Schema({
    coursetitle: {
        type: String,
        required: true,
    },
    coursetype: {
        type: String,
        required: true,
    },
    faculty: {
        type: String,
        required: true,
    },
    totalfee: {
        type: Number,
        required: true,
    },
    semesterfee: {
        type: Number,
        required: true,
    },

});

module.exports = mongoose.model("CourseModel", courseSchema);