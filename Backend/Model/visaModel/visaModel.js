const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({

    //visa
    //personal information
    fullname:{
        type:String,//DataType
        required:true,//Validate
    },
    dob:{
        type:Date,//DataType
        required:true,//Validate
    },
    gender:{
        type:String,//DataType
        required:true,//Validate
    },
    countryresidence:{
        type:String,//DataType
        required:true,//Validate
    },
    placeofbirth:{
        type:String,//DataType
        required:true,//Validate
    },
    nationality:{
        type:String,//DataType
        required:true,//Validate
    },
    passportnumber:{
        type:Number,//DataType
        required:true,//Validate
    },
    passportissuedate:{
        type:Date,//DataType
        required:true,//Validate
    },
    passportexpirydate:{
        type:Date,//DataType
        required:true,//Validate
    },
    //contact information
    residetialaddress:{
        type:String,//DataType
        required:true,//Validate
    },
    email:{
        type:String,//DataType
        required:true,//Validate
    },
    phonenumber:{
        type:Number,//DataType
        required:true,//Validate
    },
    emergencycontact:{
        type:Number,//DataType
        required:true,//Validate
    },
    //traveldetails
    purposeofvisit:{
        type:String,//DataType
        required:true,//Validate
    },
    intendedduration:{
        type:Number,//DataType
        required:true,//Validate
    },
    addressinthedestination:{
        type:String,//DataType
        required:true,//Validate
    },
    arrivaldate:{
        type:Date,//DataType
        required:true,//Validate
    },
    depaturedate:{
        type:Date,//DataType
        required:true,//Validate
    },
    //eductiondetails
    schoolname:{
        type:String,//DataType
        required:true,//Validate
    },
    courseofstudy:{
        type:String,//DataType
        required:true,//Validate
    },
    studyduration:{
        type:Number,//DataType
        required:true,//Validate
    },
    schooladdress:{
        type:String,//DataType
        required:true,//Validate
    },
    //health
    medicalinsurance:{
        type:String,//DataType
        required:true,//Validate
    },
    healthdeclaration:{
        type:String,//DataType
        required:true,//Validate
    },
    accommodationdetails:{
        type:String,//DataType
        required:true,//Validate
    },
    travelitinerary:{
        type:String,//DataType
        required:true,//Validate
    },
    //declaration
    declaration:{
        type:String,//DataType
        required:true,//Validate
    },
    dateofapplication:{
        type:Date,//DataType
        required:true,//Validate
    },
    signature:{
        type:String,//DataType
        required:true,//Validate
    },
    visaID:{
        type:String,//DataType
        required:true,//Validate
    }
});

module.exports = mongoose.model(
    "visaModel",//File name
    userSchema//Function name
)