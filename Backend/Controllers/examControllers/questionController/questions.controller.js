const Question = require('../models/question.model');

// Get all questions
exports.getQuestions = async (req, res) => {
  try {
    const questions = await Question.find();
    res.json(questions);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Create a new question
exports.createQuestion = async (req, res) => {
  const question = new Question({
    text: req.body.text,
    type: req.body.type,
    options: req.body.options,
    correctAnswer: req.body.correctAnswer,
  });

  try {
    const newQuestion = await question.save();
    res.status(201).json(newQuestion);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Get a specific question
exports.getQuestion = async (req, res) => {
  try {
    const question = await Question.findById(req.params.id);
    if (question == null) {
      return res.status(404).json({ message: 'Question not found' });
    }
    res.json(question);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update a question
exports.updateQuestion = async (req, res) => {
  try {
    const question = await Question.findById(req.params.id);
    if (question == null) {
      return res.status(404).json({ message: 'Question not found' });
    }

    if (req.body.text != null) {
      question.text = req.body.text;
    }
    if (req.body.type != null) {
      question.type = req.body.type;
    }
    if (req.body.options != null) {
      question.options = req.body.options;
    }
    if (req.body.correctAnswer != null) {
      question.correctAnswer = req.body.correctAnswer;
    }

    const updatedQuestion = await question.save();
    res.json(updatedQuestion);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete a question
exports.deleteQuestion = async (req, res) => {
  try {
    const question = await Question.findById(req.params.id);
    if (!question) {
      return res.status(404).json({ message: 'Question not found' });
    }

    await Question.deleteOne({ _id: req.params.id });
    res.json({ message: 'Question deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};