const express = require("express");
const router = express.Router();
const UniversityController = require("../../Controllers/courseControler/UniversityControllers");

router.get("/", UniversityController.getAllUniversities);
router.post("/", UniversityController.addUniversity);
router.get("/:id", UniversityController.getUniversityById);

module.exports = router;