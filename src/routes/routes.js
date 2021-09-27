const homeRoute = require("./homeRoute")
const userRoute = require("./userRoute")


module.exports = (app) =>{
    app.use(homeRoute.path,homeRoute.router);
    app.use(userRoute.path,userRoute.router);
}