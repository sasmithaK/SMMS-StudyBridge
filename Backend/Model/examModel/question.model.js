const mongoose = require('mongoose');

const questionSchema = new mongoose.Schema({
  topic: { type: String, required: true },
  text: { type: String, required: true },
  type: { type: String, required: true },
  options: { type: [String], required: function() { return this.type === 'Multiple Choice'; } },
  correctAnswer: { type: String, required: true },
}, {
  timestamps: true
});

const Question = mongoose.model('Question', questionSchema);

module.exports = Question;