// Requiring Modules and Packages
const express = require("express")
const mongoose = require("mongoose")

// const bodyParser = require


// creating instance of express
const app = express();

// setting view engine 
app.set("view engine", "ejs")

// Adding static CSS and img files
app.use(express.static("public"));


// URL = "mongodb://127.0.0.1:27017/";
// mongoose.connect(URL)
// .then(()=>{console.log("Connect to MongoDB")})
// .catch((err)=>{console.log(err);})

// Home get request
app.get("/", (req,res)=>{
    res.render("home")
})


// Listening Server
app.listen(5000, ()=>{
    console.log("Server started on Port: 3000");
})
