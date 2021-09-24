
const express = require('express');
const PORT = process.env.PORT || 8000;
const morgan = require("morgan");
const cookieParser = require("cookie-parser");
const path = require('path');
const routes = require('./routes/routes');

const databaseMiddleware  = require("./middlewares/databaseMiddleware");

async function server(mode){
    const app = express();
    app.listen(PORT, (_) => console.log(`Server ready  at ${PORT}`));
    try {    
    app.use(express.json());
    app.use(express.urlencoded({
        extended:true,
    }));
    app.use(cookieParser());
    app.use(morgan("dev"));
    app.use(express.static(path.join(__dirname,"src","public")));
    app.use(databaseMiddleware);

    if(mode == "DEV"){
        app.use(morgan("dev"));
    }




    app.set("view engine", "ejs"); 
    app.set("views",path.join(__dirname,"views"));
    
   } finally { 
       routes(app)
   }
}

module.exports = server;
