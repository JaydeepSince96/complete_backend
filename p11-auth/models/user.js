const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    user:{
        type: String,
        required: true,
        unique: true,
        trim : true,
    },
    email:{
        type: String,
        unique: true,
        trim: true,
        lowercase: true
    },
    password:{
        type:String,
        unique: true
    },
    role:{
        type:String,
        enum: ["user","admin"], //only allow 
        default: "user"
    }
},{timestamps:true})

module.exports = mongoose.model("User",userSchema)