const axios = require("axios");

const MAIN_BACKEND_URL = "http://localhost:5000";

let questionsWithAnswers = [];
let examResults = [];

exports.getQuestions = async (req, res) => {
  try {
    const response = await axios.get(`${MAIN_BACKEND_URL}/api/questions`);
    questionsWithAnswers = response.data;
    const questionsForClient = questionsWithAnswers.map(
      ({ correctAnswer, ...question }) => question
    );
    res.json(questionsForClient);
  } catch (error) {
    console.error("Error fetching questions:", error);
    res
      .status(500)
      .json({ message: "Error fetching questions from main backend" });
  }
};

exports.submitExam = async (req, res) => {
  try {
    const { answers, studentId } = req.body;
    let score = 0;
    const correctAnswers = {};
    const details = [];

    questionsWithAnswers.forEach((question) => {
      correctAnswers[question._id] = question.correctAnswer;
      const isCorrect = answers[question._id] === question.correctAnswer;
      if (isCorrect) {
        score++;
      }
      details.push({
        question: question.text,
        yourAnswer: answers[question._id] || "Not answered",
        correctAnswer: question.correctAnswer,
        isCorrect,
      });
    });

    const result = {
      studentId,
      score,
      totalQuestions: questionsWithAnswers.length,
      details,
    };

    examResults.push(result);

    res.json(result);
  } catch (error) {
    console.error("Error submitting exam:", error);
    res.status(500).json({ message: "Error submitting exam" });
  }
};

exports.getResults = (req, res) => {
  res.json(examResults);
};
