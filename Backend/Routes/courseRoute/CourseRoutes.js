const express = require("express");
const router = express.Router();
//Insert Model
const Course = require("../../Model/courseModdel/CourseModel")
const CourseController = require("../../Controllers/courseControler/CourseControllers");


router.get("/",CourseController.getAllCourses);
router.post("/",CourseController.addCourses);
router.get("/:id",CourseController.getById); //search
router.put("/:id",CourseController.updateCourse);
router.delete("/:id",CourseController.deleteCourse);

//export
module.exports = router;   