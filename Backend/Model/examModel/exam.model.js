const mongoose = require('mongoose');

const examSchema = new mongoose.Schema({
  title: { type: String, required: true },
  questions: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Question' }],
  isPublished: { type: Boolean, default: false },
}, {
  timestamps: true
});

const Exam = mongoose.model('Exam', examSchema);

module.exports = Exam;