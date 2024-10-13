const Course = require("../../Model/courseModdel/CourseModel");
const mongoose = require('mongoose');

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
const addCourses = async (req, res) => {
    const {
      coursetitle,
      coursetype,
      faculty,
      totalfee,
      semesterfee,
      courseduration,
      universityId // Add universityId to the request body
    } = req.body;
  
    try {
      const newCourse = new Course({
        coursetitle,
        coursetype,
        faculty,
        totalfee,
        semesterfee,
        courseduration,
        universityId // Save universityId in the course
      });
  
      await newCourse.save();
      res.status(201).json(newCourse);
    } catch (error) {
      console.error('Error adding course:', error);
      res.status(500).json({ message: 'Failed to add course', error });
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
    const {coursetitle, coursetype, faculty, totalfee, semesterfee, courseduration} = req.body;

    try {
        console.log("Attempting to update course:", id, req.body);
        const course = await Course.findByIdAndUpdate(
            id,
            {coursetitle, coursetype, faculty, totalfee, semesterfee, courseduration},
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

// Fetch courses by universityId
const getCoursesByUniversity = async (req, res) => {
    const { universityId } = req.params;
  
    try {
      const courses = await Course.find({ universityId });
      res.status(200).json(courses);
    } catch (error) {
      console.error('Error fetching courses:', error);
      res.status(500).json({ message: 'Failed to fetch courses', error });
    }
  };

module.exports = {
    getAllCourses,
    addCourses,
    getById,
    updateCourse,
    deleteCourse,
    getCoursesByUniversity
};