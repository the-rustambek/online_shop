const users = require("../models/userModel")

module.exports = class homeRouteCountroller{
    static async homeGetController(req,res){
        const user =  await users.findOne({
            name: "muhammad",

        })
        console.log(user);
        res.render("index");
    }
}