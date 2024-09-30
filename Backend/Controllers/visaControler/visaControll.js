const User = require("../../Model/visaModel/visaModel");

//Display part
const getAllUsers = async (req, res, next) => {
  let Users;
  //Get all users
  try {
    Users = await User.find();
  } catch (err) {
    console.log(err);
  }
  //not found Users
  if (!Users) {
    return res.status(404).json({ message: "Users not found" });
  }

  //Display all Users
  return res.status(200).json({ Users });
};

exports.getAllUsers = getAllUsers;

//Data insert
const addUsers = async (req, res, next) => {
  //const {name,gmail,age,address} = req.body;

  //visa insert
  const {
    fullname,
    dob,
    gender,
    countryresidence,
    placeofbirth,
    nationality,
    passportnumber,
    passportissuedate,
    passportexpirydate,
    residetialaddress,
    email,
    phonenumber,
    emergencycontact,
    purposeofvisit,
    intendedduration,
    addressinthedestination,
    arrivaldate,
    depaturedate,
    schoolname,
    courseofstudy,
    studyduration,
    schooladdress,
    medicalinsurance,
    healthdeclaration,
    accommodationdetails,
    travelitinerary,
    declaration,
    dateofapplication,
    signature,
  } = req.body;

  let users;
  try {
    //users = new User({ name, gmail, age, address });
    //visa insert
    users = new User({
      fullname,
      dob,
      gender,
      countryresidence,
      placeofbirth,
      nationality,
      passportnumber,
      passportissuedate,
      passportexpirydate,
      residetialaddress,
      email,
      phonenumber,
      emergencycontact,
      purposeofvisit,
      intendedduration,
      addressinthedestination,
      arrivaldate,
      depaturedate,
      schoolname,
      courseofstudy,
      studyduration,
      schooladdress,
      medicalinsurance,
      healthdeclaration,
      accommodationdetails,
      travelitinerary,
      declaration,
      dateofapplication,
      signature,
    });

    await users.save();
  } catch (err) {
    console.log(err);
  }

  //not insert users
  if (!users) {
    return res.status(404).send({ message: "unable to add users" });
  }

  return res.status(200).json({ users });
};

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

//Update user details
const updateUser = async (req, res, next) => {
  const id = req.params.id;
  //const { name, gmail, age, address } = req.body;
  //visa update
  const {
    fullname,
    dob,
    gender,
    countryresidence,
    placeofbirth,
    nationality,
    passportnumber,
    passportissuedate,
    passportexpirydate,
    residetialaddress,
    email,
    phonenumber,
    emergencycontact,
    purposeofvisit,
    intendedduration,
    addressinthedestination,
    arrivaldate,
    depaturedate,
    schoolname,
    courseofstudy,
    studyduration,
    schooladdress,
    medicalinsurance,
    healthdeclaration,
    accommodationdetails,
    travelitinerary,
    declaration,
    dateofapplication,
    signature,
  } = req.body;

  let users;

  try {
    users = await User.findByIdAndUpdate(id, {
      /*name: name,
      gmail: gmail,
      age: age,
      address: address*/
      fullname: fullname,
      dob: dob,
      gender: gender,
      countryresidence: countryresidence,
      placeofbirth: placeofbirth,
      nationality: nationality,
      passportnumber: passportnumber,
      passportissuedate: passportissuedate,
      passportexpirydate: passportexpirydate,
      residetialaddress: residetialaddress,
      email: email,
      phonenumber: phonenumber,
      emergencycontact: emergencycontact,
      purposeofvisit: purposeofvisit,
      intendedduration: intendedduration,
      addressinthedestination: addressinthedestination,
      arrivaldate: arrivaldate,
      depaturedate: depaturedate,
      schoolname: schoolname,
      courseofstudy: courseofstudy,
      studyduration: studyduration,
      schooladdress: schooladdress,
      medicalinsurance: medicalinsurance,
      healthdeclaration: healthdeclaration,
      accommodationdetails: accommodationdetails,
      travelitinerary: travelitinerary,
      declaration: declaration,
      dateofapplication: dateofapplication,
      signature: signature,
    });
    users = await users.save();
  } catch (err) {
    console.log(err);
  }
  if (!users) {
    return res.status(404).send({ message: "unable to update" });
  }
  return res.status(200).json({ users });
};

//Delete user details
const deleteUser = async (req, res, next) => {
  const id = req.params.id;

  let user;

  try {
    user = await User.findByIdAndDelete(id);
  } catch (err) {
    console.log(err);
  }
  if (!user) {
    return res.status(404).send({ message: "unable to delete" });
  }
  return res.status(200).json({ user });
};

exports.getAllUsers = getAllUsers;
exports.addUsers = addUsers;
exports.getById = getById;
exports.updateUser = updateUser;
exports.deleteUser = deleteUser;
