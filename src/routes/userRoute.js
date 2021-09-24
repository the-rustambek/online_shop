const {userRegisterGetController,userLoginGetController} =  require("../controllers/userRouteControllers")
const router =  require("express").Router();

router.get("/reg",userRegisterGetController);
router.get("/login",userLoginGetController);

module.exports = {
    path: "/users",
    router,
}