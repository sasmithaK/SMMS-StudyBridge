const express = require("express");
const router = express.Router();
const DemoControll = require("../../Controllers/DemoControll/DemoControll");

// Route to get user by email
router.get("/email/:email", DemoControll.getUserByEmail);

module.exports = router;
