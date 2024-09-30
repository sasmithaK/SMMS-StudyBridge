const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const Users = require("../../Model/workuserModel/UserModal");
const router = express.Router();
const { v4: uuidv4 } = require('uuid');
const path = require("path");
const multer = require("multer");


//Storage location declare
var storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./UserUploads");
  },
  filename: (req, file, cb) => {
    let ext = path.extname(file.originalname);
    cb(null, Date.now() + ext);
  },
});

// This function used to upload images through middleware
const upload = multer({
  dest: "/app/UserUploads",
  storage: storage,
});


//Application add request
router.post(
  "/add",
  bodyParser.json(),
  upload.single("NIC"),
  async (req, res) => {
    // collect all data came through the request
    const UserID = uuidv4();
    const UserTitle = req.body.UserTitle;
    const UserFirstName = req.body.UserFirstName;
    const UserLastName = req.body.UserLastName;
    const UserEmail = req.body.UserEmail;
    const UserMobile = req.body.UserMobile;
    const Birthday = req.body.Birthday;
    const UserGender = req.body.UserGender;
    const UserSteetAddress = req.body.UserSteetAddress;
    const UserCity = req.body.UserCity;
    const UserZipcode = req.body.UserZipcode;
    const UserNationality = req.body.UserNationality;
    const UserCC = req.body.UserCC;
    const UserDisablity = req.body.UserDisablity;
    const UserCountry = req.body.UserCountry;
    const AgentCode = req.body.AgentCode;
    const AgentName = req.body.AgentName;
    const AgentEmail = req.body.AgentEmail;
    const UserPassword = req.body.UserPassword;


    try {
      // check the recieved email allready in use
          //if true -> send a failed response
      await Users.find({ UserEmail: UserEmail }).then(async (user) => {
        if (user.length > 0) {
          res.json({
            status: "failed",
            statusCode: 1,
            statusMsg: "Email in use",
          });
        } else {
          // Create a Usermodal object
          const newUser = new Users({
            UserID: UserID,
            UserTitle: UserTitle,
            UserFirstName: UserFirstName,
            UserLastName: UserLastName,
            UserEmail: UserEmail,
            UserMobile: UserMobile,
            Birthday: Birthday,
            UserGender: UserGender,
            UserAddres: {
              UserSteetAddress:UserSteetAddress,
              UserCity:UserCity,
              UserZipcode:UserZipcode
            },
            UserNationality: UserNationality,
            UserCC: UserCC,
            UserDisablity: UserDisablity,
            UserCountry: UserCountry,
            AgentCode: AgentCode,
            AgentName: AgentName,
            AgentEmail: AgentEmail,
            NIC: "http:localhost:3000/" + req.file.path,
            UserPassword: UserPassword,
          });
          await newUser
            .save()
            .then((value) => {
              res.json({
                status: "success",
                statusCode: 0,
                statusMsg: "User added success",
              });
            })
            .catch((value) => {
              res.json({
                status: "failed",
                statusCode: -1,
                statusMsg: "User added failed",
              });
            });
        }
      });
    } catch (error) {
      console.log(error)
      res.json({
        status: "failed",
        statusCode: 1,
        statusMsg: "User added failed",
      });
    }
  }
);

//Application update function
router.post(
  "/update",
  bodyParser.json(),
  upload.single("NIC"),
  async (req, res) => {
    // collect all data came through the request
    const UserID = req.body.UserID;
    const UserTitle = req.body.UserTitle;
    const UserFirstName = req.body.UserFirstName;
    const UserLastName = req.body.UserLastName;
    const UserEmail = req.body.UserEmail;
    const UserMobile = req.body.UserMobile;
    const Birthday = req.body.Birthday;
    const UserGender = req.body.UserGender;
    const UserAddres = req.body.UserAddres;
    const UserNationality = req.body.UserNationality;
    const UserCC = req.body.UserCC;
    const UserDisablity = req.body.UserDisablity;
    const UserCountry = req.body.UserCountry;
    const AgentCode = req.body.AgentCode;
    const AgentName = req.body.AgentName;
    const AgentEmail = req.body.AgentEmail;
    const UserPassword = req.body.UserPassword;
    const old_NIC=req.body.old_NIC;
    const docUpdated=req.body.isDocUpdated;
    
    // check the document is updated? if yes document will re-upload
    try {
      
      if(docUpdated=='true'){
        await Users.findOneAndUpdate(
          { UserID: UserID },
          {
            UserID: UserID,
            UserTitle: UserTitle,
            UserFirstName: UserFirstName,
            UserLastName: UserLastName,
            UserEmail: UserEmail,
            UserMobile: UserMobile,
            Birthday: Birthday,
            UserGender: UserGender,
            UserAddres: UserAddres,
            UserNationality: UserNationality,
            UserCC: UserCC,
            UserDisablity: UserDisablity,
            UserCountry: UserCountry,
            AgentCode: AgentCode,
            AgentName: AgentName,
            AgentEmail: AgentEmail,
            
            NIC: "http:localhost:3000/" + req.file.path,
            UserPassword: UserPassword,
          },
          { new: true }
        ).then(async (user) => {
          res.json({
              status: "success",
              statusCode: 0,
              statusMsg: "User update success",
            });
        }).catch((value) => {
          res.json({
              status: "failed",
              statusCode: 1,
              statusMsg: "User added failed"+value,
            });
        })
      }else{
        await Users.findOneAndUpdate(
          { UserID: UserID },
          {
            UserID: UserID,
            UserTitle: UserTitle,
            UserFirstName: UserFirstName,
            UserLastName: UserLastName,
            UserEmail: UserEmail,
            UserMobile: UserMobile,
            Birthday: Birthday,
            UserGender: UserGender,
            UserAddres: UserAddres,
            UserNationality: UserNationality,
            UserCC: UserCC,
            UserDisablity: UserDisablity,
            UserCountry: UserCountry,
            AgentCode: AgentCode,
            AgentName: AgentName,
            AgentEmail: AgentEmail,
            
            NIC: old_NIC,
            UserPassword: UserPassword,
          },
          { new: true }
        ).then(async (user) => {
          res.json({
              status: "success",
              statusCode: 0,
              statusMsg: "User update success",
            });
        }).catch((value) => {
          console.log("failed"+value)

          res.json({
              status: "failed",
              statusCode: 1,
              statusMsg: "User added failed"+value,
            });
        })
      }
      
    } catch (error) {
      res.json({
        status: "failed",
        statusCode: 1,
        statusMsg: "User update failed"+error,
      });
    }
  }
);


// get the application using useremail
router.post("/get",bodyParser.json(),async(req,res)=>{
    const UserEmail = req.body.UserEmail;

    await Users.find({UserEmail:UserEmail}).then((user) => {
        if(user.length>0){
            res.json({
                status: "success",
                statusCode: 0,
                statusMsg: "User get success",
                user:user
              });
        }else{
            res.json({
                status: "failed",
                statusCode: 1,
                statusMsg: "No Users",
              });
        }
    }).catch((value) => {
        res.json({
            status: "failed",
            statusCode: 1,
            statusMsg: "User get failed",
          });
    })
})

// delete a application
router.post("/delete", bodyParser.json(), async (req, res) => {
  const UserID = req.body.UserID;

  try {
    await Users.findOneAndDelete(
      { UserID: UserID }
    )
      .then((value) => {
        res.json({
          status: "success",
          statusCode: 0,
          statusMsg: "Deleted success",
        });
      })
      .catch((value) => {
        res.json({
          status: "failed",
          statusCode: -1,
          statusMsg: "Delete failed",
        });
      });
  } catch (error) {
    res.json({
      status: "failed",
      statusCode: -1,
      statusMsg: "Delete failed",
    });
  }
});

module.exports = router;
