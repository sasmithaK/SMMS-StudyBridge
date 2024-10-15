const User = require("../../Model/DemoModel/DemoModel");

//Display part
const getAllUsers = async (req, res, next) => {
  let DemoStu;
  //Get all users
  try {
    DemoStu = await User.find();
  } catch (err) {
    console.log(err);
  }
  //not found Users
  if (!DemoStu) {
    return res.status(404).json({ message: "Users not found" });
  }

  //Display all Users
  return res.status(200).json({ DemoStu });
};

exports.getAllUsers = getAllUsers;


//Get by ID, retrive
const getById = async (req, res, next) => {
  const id = req.params.id;

  let user;

  try {
    user = await User.findById(id);
  } catch (err) {
    console.log(err);
  }
  //not available users
  if (!user) {
    return res.status(404).send({ message: "user not found" });
  }

  return res.status(200).json({ user });
};


exports.getAllUsers = getAllUsers;
exports.getById = getById;


