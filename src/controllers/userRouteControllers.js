const users =  require("../models/userModel");
const {signUpValidation} = require("../modules/validations");
const {generateHash}=require("../modules/bcrypt");

module.exports = class userRouteCountroller{
    static async userRegisterGetController(req,res){
        res.render("reg");
    }
    static async userLoginGetController(req,res){
        res.render("login");
    }
   
    static async userSignUpPostController(req,res){
        try{
    const {name, email, password} = await signUpValidation(req.body);
            const user = await users.create({
                name, email,
                 password: await generateHash(password),
            })



    console.log(user);
        }
        catch(error){
            console.log(error);
            res.render("reg",{
                error: error+"",
            });
        }


        res.redirect("/users/login")
        
    }
};
