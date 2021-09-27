const {userRegisterGetController,userLoginGetController,userSignUpPostController,userVerifyGetController} =  require("../controllers/userRouteControllers")
const router =  require("express").Router();

router.get("/reg",userRegisterGetController);
router.get("/login",userLoginGetController);
router.get("/verify/:id",userVerifyGetController);
router.post("/reg",userSignUpPostController);


module.exports = {
    path: "/users",
    router,
}