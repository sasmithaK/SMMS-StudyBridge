const mongoose = require('mongoose');

const CourseSchema = new mongoose.Schema({
  coursetitle: {
    type: String,
    required: true
  },
  coursetype: {
    type: String,
    required: true
  },
  faculty: {
    type: String,
    required: true
  },
  totalfee: {
    type: Number,
    required: true
  },
  semesterfee: {
    type: Number,
    required: true
  },
  courseduration: {
    type: Number,
    required: true,
    min: 1,
    max: 4
  },
  universityId: {
    type: mongoose.Schema.Types.ObjectId, // Refers to the _id in the University model
    ref: 'University',
    required: true
  }
});

const Course = mongoose.model('Course', CourseSchema);

module.exports = Course;
