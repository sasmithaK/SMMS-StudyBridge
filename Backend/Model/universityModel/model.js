const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    
    uniName:{
        type:String,
        require:true
    },
    regNo:{
        type:String,
        require:true
    },
    location:{
        type:String,
        required:true
    },
    contact:{
        type:String,
        require:true
    },
    rank:{
        type:String,
        require:true
    },
    webUrl:{
        type:String,
        required:true
    },
    description:{
        type:String,
        require:true
    },
    image:{
        type:String,
        require:true
    },
    userName:{
        type:String,
        required:true,
        unique: true
    },
    password:{
        type:String,
        required:true
    },
    

});

module.exports = mongoose.model('posts',postSchema);