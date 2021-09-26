const {userRegisterGetController,userLoginGetController,userSignUpPostController} =  require("../controllers/userRouteControllers")
const router =  require("express").Router();

router.get("/reg",userRegisterGetController);
router.get("/login",userLoginGetController);
router.post("/reg",userSignUpPostController);


module.exports = {
    path: "/users",
    router,
}