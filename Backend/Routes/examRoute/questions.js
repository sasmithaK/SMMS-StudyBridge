const express = require('express');
const router = express.Router();
const questionsController = require('../controllers/questions.controller');

router.get('/', questionsController.getQuestions);
router.post('/', questionsController.createQuestion);
router.get('/:id', questionsController.getQuestion);
router.put('/:id', questionsController.updateQuestion);
router.delete('/:id', questionsController.deleteQuestion);

module.exports = router;