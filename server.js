require("dotenv").config();

const express = require('express');
const PORT = process.env.PORT || 8000;
const morgan = require("morgan");
const cookieParser = require("cookie-parser");
const path = require('path');

async function server(){
   try {
    const app = express();
    app.use(express.json());
    app.use(express.urlencoded());
    app.use(cookieParser());
    app.use(express.static(path.join(__dirname,"src","public")));
    app.set("view engine", "ejs"); 
   } finally { 
   }
}
