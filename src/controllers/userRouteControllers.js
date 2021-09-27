const users =  require("../models/userModel");
const {signUpValidation} = require("../modules/validations");
const {generateHash}=require("../modules/bcrypt");
const {email:sendMail} = require("../modules/email");
// const {sendEmail} = require("../modules/email");


module.exports = class userRouteCountroller {
	static async userRegisterGetController(req, res) {
		res.render("reg");
	}
	static async userLoginGetController(req, res) {
		res.render("login");
	}
	static async userSignUpPostController(req, res) {
		try {
			const { name, email, password } = await signUpValidation(req.body);

			const user = await users.create({
				name,
				email,
				password: await generateHash(password),
			});

			// await sendMail(
			// 	email,
			// 	"Iltimos pochtangizni tasdiqlang",
			// 	'Pochtangizni tasdiqlash uchun link',
			// 	`<a href="http://localhost:8080/users/verify/${user._id}"/>Tasdiqlash</a>`
			// );

			console.log(`http://10.10.129.48:8080/users/verify/${user._id}`);

			res.redirect("/users/login");
		} catch (error) {
			console.log(error);
			res.render("reg", {
				error: error + "",
			});
		}
	}
static async userVerifyGetController(req,res){
	try{
		const id = req.params.id;
		if(!id) throw new Error("Verification kalit xato");

		const user = await users.findOne({
			_id:id,
		});

// console.log(user);

if(!user) throw new Error("User not found");

await users.updateOne({
	_id: id,
},
{
	isVerified:true,
}
);


	}
	catch(error){
		res.render("login",{
			error: error + "",
		});
	}
}



};