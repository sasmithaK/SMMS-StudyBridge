const express = require("express");
const router = express.Router();
// Insert Model
const Course = require("../../Model/courseModdel/CourseModel");
const CourseController = require("../../Controllers/courseControler/CourseControllers");

// Get all courses
router.get("/", CourseController.getAllCourses);

// Add a new course (with universityId)
router.post("/", CourseController.addCourses);

// Get a course by ID
router.get("/:id", CourseController.getById);

// Get all courses for a specific university by universityId
router.get("/university/:universityId", CourseController.getCoursesByUniversity); // New route for fetching courses by universityId

// Update a course by ID
router.put("/:id", CourseController.updateCourse);

// Delete a course by ID
router.delete("/:id", CourseController.deleteCourse);

// Export the router
module.exports = router;
