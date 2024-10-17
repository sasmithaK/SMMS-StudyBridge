const mongoose = require("mongoose");

const StudentSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    age: {
      type: String,
      required: true,
    },
    img: {
      type: String, // Image field can be optional
    },
    mobile: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    isStudent: {
      type: Boolean,
      default: false, // Default value is false
    },
    type: {
      type: String,
      required: true,
    },
    degree: {
      type: String, // New field for the degree
      required: true, 
    },
  }
);

module.exports = mongoose.model("StudentModel", StudentSchema);
