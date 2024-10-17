const express = require('express');
const router = express.Router();
const StudentModel = require("../Model/StudentModel"); // Adjust the path if necessary

// Create a new student
router.post('/students', async (req, res) => {
    try {
        const { name, email, age, img, mobile, password, isStudent, type, degree } = req.body;
        const newStudent = new StudentModel({ 
            name, 
            email, 
            age, 
            img, 
            mobile, 
            password, 
            isStudent, 
            type, 
            degree 
        });
        await newStudent.save();
        res.status(201).json(newStudent);
    } catch (error) {
        res.status(400).json({ message: 'Error creating student', error });
    }
});

// Get student by ID
router.get('/students/:id', async (req, res) => {
    try {
        const student = await StudentModel.findById(req.params.id);
        if (!student) {
            return res.status(404).json({ message: 'Student not found' });
        }
        res.status(200).json(student);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching student', error });
    }
});

// Get all students
router.get('/students', async (req, res) => {
    try {
        const students = await StudentModel.find();
        res.status(200).json(students);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching students', error });
    }
});

// Update student by ID
router.put('/students/:id', async (req, res) => {
    try {
        const { name, email, age, img, mobile, password, isStudent, type, degree } = req.body;
        const updatedStudent = await StudentModel.findByIdAndUpdate(
            req.params.id,
            { name, email, age, img, mobile, password, isStudent, type, degree },
            { new: true } // returns the updated document
        );
        if (!updatedStudent) {
            return res.status(404).json({ message: 'Student not found' });
        }
        res.status(200).json(updatedStudent);
    } catch (error) {
        res.status(400).json({ message: 'Error updating student', error });
    }
});

// Delete student by ID
router.delete('/students/:id', async (req, res) => {
    try {
        const deletedStudent = await StudentModel.findByIdAndDelete(req.params.id);
        if (!deletedStudent) {
            return res.status(404).json({ message: 'Student not found' });
        }
        res.status(200).json({ message: 'Student deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting student', error });
    }
});

// Login Route
router.post('/login', async (req, res) => {
    const { email, password } = req.body;
    try {
        const student = await StudentModel.findOne({ email });
        
        if (student && student.password === password) {
            res.status(200).json({ success: true, message: 'Login successful' });
        } else {
            res.status(401).json({ success: false, message: 'Invalid email or password' });
        }
    } catch (error) {
        res.status(500).json({ success: false, message: 'Error during login' });
    }
});

// Get student ID by email
router.get('/students/id/:email', async (req, res) => {
    const email = req.params.email.trim(); // Trim whitespace

    console.log('Fetching student ID with email:', email); // Log the email

    try {
        // Validate the email format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!email || !emailRegex.test(email)) {
            return res.status(400).json({ message: 'Invalid email format provided' });
        }

        const student = await StudentModel.findOne({ email });

        if (student) {
            res.status(200).json({ id: student._id }); // Return student ID if found
        } else {
            res.status(404).json({ message: 'User not found' });
        }
    } catch (error) {
        console.error('Error fetching student ID:', error); // Log the error details
        res.status(500).json({
            message: 'Error fetching student ID',
            error: error.message,
        });
    }
});

module.exports = router;
