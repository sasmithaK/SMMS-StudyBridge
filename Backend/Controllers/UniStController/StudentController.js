const Student = require("../../Model/universityModel/StudentModel");
const mongoose = require('mongoose');

// Display all courses
// Display all courses for a specific university
const getAllStudents = async (req, res, next) => {
    const { university } = req.query; // Get university from query parameters
    try {
        console.log("Attempting to fetch all students");
        
        const filter = university ? { university } : {}; // Filter by university if provided
        const students = await Student.find(filter);
        
        console.log("Students fetched:", students);

        if (!students || students.length === 0) {
            console.log("No students found");
            return res.status(404).json({ message: "No students found" });
        }
        
        return res.status(200).json({ students });
    } catch (err) {
        console.error("Error in getAllStudents:", err);
        return res.status(500).json({ message: "Error fetching students", error: err.message });
    }
};


// Add a new course
const addStudents = async (req, res, next) => {
    const {name, address, email, age, contact, university} = req.body;

    try {
        console.log("Attempting to add a new student:", req.body);
        const student = new Student({name, address, email, age, contact, university});
        await student.save();
        console.log("New student added:", student);
        return res.status(201).json({ student });
    } catch (err) {
        console.error("Error in addStudents:", err);
        return res.status(500).json({message: "Unable to add student", error: err.message});
    }
};


// Get student by ID
const getById = async (req, res, next) => {
    const id = req.params.id;
    try {
        console.log("Attempting to fetch student by ID:", id);
        const student = await Student.findById(id);
        if (!course) {
            console.log("Student not found for ID:", id);
            return res.status(404).json({message: "Student not found"});
        }
        console.log("Student found:", student);
        return res.status(200).json({ student });
    } catch (err) {
        console.error("Error in getById:", err);
        return res.status(500).json({ message: "An error occurred while fetching the student", error: err.message });
    }
};


// Update student details
const updateStudent = async (req, res, next) => {
    const id = req.params.id;
    const {name, address, email, age, contact} = req.body;

    try {
        console.log("Attempting to update student:", id, req.body);
        const student = await Student.findByIdAndUpdate(
            id,
            {name, address, email, age, contact},
            {new: true, runValidators: true}
        );
        
        if (!student) {
            console.log("Student not found for update:", id);
            return res.status(404).json({message: "Student not found"});
        }
        
        console.log("Student updated:", student);
        return res.status(200).json({ student });
    } catch (err) {
        console.error("Error in updateStudent:", err);
        return res.status(500).json({message: "Error updating student", error: err.message});
    }
};


// Delete student
const deleteCourse = async (req, res, next) => {
    const id = req.params.id;

    try {
        console.log("Attempting to delete student:", id);
        const student = await Course.findByIdAndDelete(id);
        if (!student) {
            console.log("Student not found for deletion:", id);
            return res.status(404).json({message: "Student not found"});
        }
        console.log("Student deleted:", student);
        return res.status(200).json({ message: "Student successfully deleted", student });
    } catch (err) {
        console.error("Error in deleteStudent:", err);
        return res.status(500).json({message: "Error deleting student", error: err.message});
    }
};


module.exports = {
    getAllStudents,
    addStudents,
    getById,
    updateStudent,
    deleteCourse
};