const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const pdfSchema = new Schema({

    //visa
    //personal information
    pdf:{
        type:String,//DataType
        required:true,//Validate
    },
    title:{
        type:String,//DataType
        required:true,//Validate
    },
  
});

module.exports = mongoose.model(
    "PdfDetails",//File name
    pdfSchema//Function name
)