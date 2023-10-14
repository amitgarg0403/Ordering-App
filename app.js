// Requiring Modules and Packages
const express = require("express")
const mongoose = require("mongoose")
const products = require("./products")

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


// Global Variable
let cart = []


// Home get request
app.get("/", (req,res)=>{
    res.render("home")
})


// Product get request
app.get("/products", (req,res)=>{
    
res.render("products", { Products : products })
})

// Product Post request
app.post("/products", (req, res)=>{
    console.log("Hello");
    q = req.body.name;
    console.log(q)
})

// cart get request

app.get("/cart", (req,res)=>{
res.render("cart")
})



// Listening Server
app.listen(5000, ()=>{
    console.log("Server started on Port: 5000");
})
