const database = require("../modules/mongoose")

async function databaseMiddleware(req,res,next){
    const db = await database();
    req.db = db;
    next();
}

module.exports = databaseMiddleware;