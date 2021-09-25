const mongoose = require('mongoose');

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