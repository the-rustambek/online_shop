const mongoose = require('mongoose');
// require("../models/UserModel");

async function mongo(){
    try{
        await mongoose.connect(process.env.MONGO_URL);
    // const users =  usersModel;
    
    }
    catch(error){
        console.error("MONGOERROR",error + "");
    }
}

module.exports = mongo;