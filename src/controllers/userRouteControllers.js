module.exports = class userRouteCountroller{
    static async userRegisterGetController(req,res){
        res.render("reg");
    }
    static async userLoginGetController(req,res){
        res.render("login");
    }
}   