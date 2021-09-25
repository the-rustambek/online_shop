const mongoose =  require("mongoose");

const userSchema =  new mongoose.Schema({
    name:{
        type:String,
        min:[3,"Ismingiz juda qisqa"],
        max:[32,"Ismingiz juda uzun"],
        required:true,
    },
    email:{
        type:String,
        required:true,
    },
    password:{
        type: String,
        required:true,
    },
    isVerified: {
        type: Boolean,
        required:true,
        default:false,
    }
});

const user = mongoose.model("user",userSchema);
module.exports = user;