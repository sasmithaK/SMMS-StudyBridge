const University = require("../../Model/courseModdel/CourseModel");

// Get all universities
const getAllUniversities = async (req, res, next) => {
    let universities;
    try {
        universities = await University.find();
    } catch (err) {
        console.log(err);
        return res.status(500).json({ message: "Error fetching universities" });
    }
    if (!universities) {
        return res.status(404).json({ message: "No universities found" });
    }
    return res.status(200).json({ universities });
};

// Add a new university
const addUniversity = async (req, res, next) => {
    const { Uname, Uid } = req.body;
    let university;
    try {
        university = new University({ Uname, Uid });
        await university.save();
    } catch (err) {
        console.log(err);
        return res.status(500).json({ message: "Unable to add university" });
    }
    return res.status(201).json({ university });
};

// Get university by ID
const getUniversityById = async (req, res, next) => {
    const id = req.params.id;
    let university;
    try {
        university = await University.findById(id);
    } catch (err) {
        console.log(err);
        return res.status(500).json({ message: "Error fetching university" });
    }
    if (!university) {
        return res.status(404).json({ message: "University not found" });
    }
    return res.status(200).json({ university });
};

exports.getAllUniversities = getAllUniversities;
exports.addUniversity = addUniversity;
exports.getUniversityById = getUniversityById;