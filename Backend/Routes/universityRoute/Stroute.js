const express = require("express");
const router = express.Router();
//Insert Model
const Student = require("../../Model/universityModel/StudentModel");
const StudentController = require("../../Controllers/UniStController/StudentController");


router.get("/",StudentController.getAllStudents);
router.post("/",StudentController.addStudents);
router.get("/:id",StudentController.getById); //search
router.put("/:id",StudentController.updateStudent);
router.delete("/:id",StudentController.deleteCourse);

//export
module.exports = router;   

