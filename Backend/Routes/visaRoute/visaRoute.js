const express = require("express");
const router = express.Router();
//Insert Model
const User = require("../../Model/visaModel/visaModel");
//Insert user controller
const visaControll = require("../../Controllers/visaControler/visaControll");

router.get("/",visaControll.getAllUsers);
router.post("/",visaControll.addUsers);
router.get("/:id",visaControll.getById);
router.put("/:id",visaControll.updateUser);
router.delete("/:id",visaControll.deleteUser);

//Export
module.exports = router;