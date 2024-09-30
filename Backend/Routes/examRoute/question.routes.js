const express = require("express");
const router = express.Router();
const {
  createQuestion,
  getQuestions,
  getQuestion,
  updateQuestion,
  deleteQuestion,
} = require("../../Controllers/examControllers/questionController/questionController");

router.post("/", createQuestion);
router.get("/", getQuestions);
router.get("/:id", getQuestion);
router.put("/:id", updateQuestion);
router.delete("/:id", deleteQuestion);

module.exports = router;
