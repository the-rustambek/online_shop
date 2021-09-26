const users =  require("../models/userModel");
const {signUpValidation} = require("../modules/validations");
const {generateHash}=require("../modules/bcrypt");
const {email:sendEmail} = require("../modules/email")
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
            });

await sendEmail(email, "Iltimos pochtangizni tasdiqlang", "Pochtangizni tasdiqlash uchun link",
 `<a href="http://localhost:8000/users/verify/${user._id}">Tasdiqlash</a>`);

res.redirect("/users/login");
         console.log(`http://localhost:8000/users/verify/${user._id}`);
        }
        catch(error){
            console.log(error);
            res.render("reg",{
                error: error+"",
            });
        };
        
        
    }
};
