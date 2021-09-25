const {userRegisterGetController,userLoginGetController,userLoginPostController} =  require("../controllers/userRouteControllers")
const router =  require("express").Router();

router.get("/reg",userRegisterGetController);
router.get("/login",userLoginGetController);
router.post("/login",userLoginPostController);

module.exports = {
    path: "/users",
    router,
}