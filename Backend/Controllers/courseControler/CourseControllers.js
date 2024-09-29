const Course = require("../../Model/courseModdel/CourseModel");
const mongoose = require('mongoose');

// Display all courses
// Display all courses
const getAllCourses = async (req, res, next) => {
    try {
        console.log("Attempting to fetch all courses");
        
        const courses = await Course.find();
        
        console.log("Courses fetched:", courses);

        if (!courses || courses.length === 0) {
            console.log("No courses found");
            return res.status(404).json({message: "No courses found"});
        }
        
        return res.status(200).json({ courses });
    } catch (err) {
        console.error("Error in getAllCourses:", err);
        return res.status(500).json({message: "Error fetching courses", error: err.message});
    }
};


// Add a new course
const addCourses = async (req, res, next) => {
    const {coursetitle, coursetype, faculty, totalfee, semesterfee} = req.body;

    try {
        console.log("Attempting to add a new course:", req.body);
        const course = new Course({coursetitle, coursetype, faculty, totalfee, semesterfee});
        await course.save();
        console.log("New course added:", course);
        return res.status(201).json({ course });
    } catch (err) {
        console.error("Error in addCourses:", err);
        return res.status(500).json({message: "Unable to add course", error: err.message});
    }
};


// Get course by ID
const getById = async (req, res, next) => {
    const id = req.params.id;
    try {
        console.log("Attempting to fetch course by ID:", id);
        const course = await Course.findById(id);
        if (!course) {
            console.log("Course not found for ID:", id);
            return res.status(404).json({message: "Course not found"});
        }
        console.log("Course found:", course);
        return res.status(200).json({ course });
    } catch (err) {
        console.error("Error in getById:", err);
        return res.status(500).json({ message: "An error occurred while fetching the course", error: err.message });
    }
};


// Update course details
const updateCourse = async (req, res, next) => {
    const id = req.params.id;
    const {coursetitle, coursetype, faculty, totalfee, semesterfee} = req.body;

    try {
        console.log("Attempting to update course:", id, req.body);
        const course = await Course.findByIdAndUpdate(
            id,
            {coursetitle, coursetype, faculty, totalfee, semesterfee},
            {new: true, runValidators: true}
        );
        
        if (!course) {
            console.log("Course not found for update:", id);
            return res.status(404).json({message: "Course not found"});
        }
        
        console.log("Course updated:", course);
        return res.status(200).json({ course });
    } catch (err) {
        console.error("Error in updateCourse:", err);
        return res.status(500).json({message: "Error updating course", error: err.message});
    }
};


// Delete course
const deleteCourse = async (req, res, next) => {
    const id = req.params.id;

    try {
        console.log("Attempting to delete course:", id);
        const course = await Course.findByIdAndDelete(id);
        if (!course) {
            console.log("Course not found for deletion:", id);
            return res.status(404).json({message: "Course not found"});
        }
        console.log("Course deleted:", course);
        return res.status(200).json({ message: "Course successfully deleted", course });
    } catch (err) {
        console.error("Error in deleteCourse:", err);
        return res.status(500).json({message: "Error deleting course", error: err.message});
    }
};

module.exports = {
    getAllCourses,
    addCourses,
    getById,
    updateCourse,
    deleteCourse
};