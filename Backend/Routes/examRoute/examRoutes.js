const express = require("express");
const router = express.Router();
const examController = require("../../Controllers/examControllers/examController/examController");

router.get("/questions", examController.getQuestions);
router.post("/submit", examController.submitExam);
router.get("/results", examController.getResults);

module.exports = router;
