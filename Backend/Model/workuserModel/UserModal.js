const mongoose=require("mongoose");

const UserSchema=mongoose.Schema({
    UserID:{
        type:String,
        require:true,
    },
    UserTitle:{
        type:String,
        require:true,
    },
    UserFirstName:{
        type:String,
        require:true,
    },
    UserLastName:{
        type:String,
        require:true,
    },
    UserEmail:{
        type:String,
        require:true,
    },
    UserMobile:{
        type:String,
        require:true,
    },
    Birthday:{
        type:Date,
        require:true,
    },
    UserGender:{
        type:String,
        require:true,
    },
    UserAddres:{
        type:[Object]
    },
    UserNationality:{
        type:String,
        require:true,
    },
    UserCC:{
        type:String,
        require:true,
    },
    UserDisablity:{
        type:String,
        require:true,
    },
    UserCountry:{
        type:String,
        require:true,
    },
    AgentCode:{
        type:Number,
        require:true,
    },
    AgentName:{
        type:String,
        require:true,
    },
    AgentEmail:{
        type:String,
        require:true,
    },
    NIC:{
        type:String,
        require:true,
    },
    UserPassword:{
        type:String,
        require:true,
    },



})
const Users=mongoose.model('user',UserSchema);

module.exports = Users