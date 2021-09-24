const {homeGetController}= require("../controllers/homeRouteCountroller");
const router =  require("express").Router();

router.get("/",homeGetController);

module.exports = {
    path: "/",
    router,
}