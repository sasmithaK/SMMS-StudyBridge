const express = require("express");
const router = express.Router();
//Insert Model
const User = require("../../Model/DemoModel/DemoModel");
//Insert user controller
const DemoControll = require("../../Controllers/DemoControll/DemoControll");

router.get("/",DemoControll.getAllUsers);
router.get("/:id",DemoControll.getById);

//Export
module.exports = router;