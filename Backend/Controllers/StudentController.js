const Student = require("../Model/Student");

// Get all students
const getAllStudents = async (req, res, next) => {
    let students;
    try {
        students = await Student.find();
    } catch (err) {
        console.log(err);
    }

    if (!students) {
        return res.status(404).json({ message: "No students found" });
    }
    return res.status(200).json({ students });
};

// Add a new student
const addStudents = async (req, res, next) => {
    const { name, email, age, img, mobile, password, isStudent, type, degree } = req.body;
    let student;

    try {
        student = new Student({
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
        await student.save();
    } catch (err) {
        console.log(err);
    }

    if (!student) {
        return res.status(404).json({ message: "Unable to add student" });
    }
    return res.status(200).json({ student });
};

// Get student by ID
const getById = async (req, res, next) => {
    const id = req.params.id;
    let student;

    try {
        student = await Student.findById(id);
    } catch (err) {
        console.log(err);
    }

    if (!student) {
        return res.status(404).json({ message: "Student not found" });
    }
    return res.status(200).json({ student });
};

// Update student details
const updateStudent = async (req, res, next) => {
    const id = req.params.id;
    const { name, email, age, img, mobile, password, isStudent, type, degree } = req.body;
    let student;

    try {
        student = await Student.findByIdAndUpdate(
            id,
            {
                name,
                email,
                age,
                img,
                mobile,
                password,
                isStudent,
                type,
                degree,
            },
            { new: true } // Return the updated student details
        );
    } catch (err) {
        console.log(err);
    }

    if (!student) {
        return res.status(404).json({ message: "Unable to update student details" });
    }
    return res.status(200).json({ student });
};

// Delete student details
const deleteStudent = async (req, res, next) => {
    const id = req.params.id;
    let student;

    try {
        student = await Student.findByIdAndDelete(id);
    } catch (err) {
        console.log(err);
    }

    if (!student) {
        return res.status(404).json({ message: "Unable to delete student" });
    }
    return res.status(200).json({ message: "Student deleted successfully" });
};

exports.getAllStudents = getAllStudents;
exports.addStudents = addStudents;
exports.getById = getById;
exports.updateStudent = updateStudent;
exports.deleteStudent = deleteStudent;
