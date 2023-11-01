// Requiring Modules and Packages
const express = require("express")
const mongoose = require("mongoose")
const products = require("./products")
const bodyParser = require("body-parser");
const credentials = require("./signup")

// creating instance of express
const app = express();


// const bodyParser = require
app.use(bodyParser.urlencoded({extended: true}));

// setting view engine 
app.set("view engine", "ejs")

// Adding static CSS and img files
app.use(express.static("public"));


// URL = "mongodb://127.0.0.1:27017/";
// mongoose.connect(URL)
// .then(()=>{console.log("Connect to MongoDB")})
// .catch((err)=>{console.log(err);})


// Global Variable
let cart = [];


// Home get request
app.get("/", (req,res)=>{
    res.render("home")
})

//SignIn get request
app.get("/signin", (req,res)=>{
    res.render("signin" ,{Message: ""})
})


//SignIn post request
app.post("/signin", (req,res)=>{
    let checkUser = {
    email: req.body.myEmail,
    password: req.body.myPassword
    }

    credentials.map((cred)=>{
        if(cred.email===checkUser.email && cred.password===checkUser.password)
        res.redirect("/")
        else{
           res.redirect('/signin/:401')
        }
    })
})

//SignIn WrongCredential request
app.get("/signin/:id", (req,res)=>{
    let q = req.params.id;
    res.render('signin',{Message: "Invalid Credentials, Enter Again!"})
})

// Product get request
app.get("/products", (req,res)=>{
    res.render("products", { pageProducts : products })
})

// Add to cart get request
app.get("/products/:id", (req,res)=>{
    q = req.params.id;
    let cartItem = products.find((product)=>{
        if(product.id == q){
            return product;
        }
    })
    cart.push(cartItem);
    res.redirect("/products")
})

// cart get request

app.get("/cart", (req,res)=>{
res.render("cart",{ pageCart : cart})
})

//payment get request
app.get("/payment/:id",(req,res)=>{
    let q = req.params.id;
    res.send("Please wait while your Payment is processing")
})


app.get("/signup", (req,res)=>{
    res.render("signup")
    console.log("Hello");
    console.log(credentials);
})

app.post("/signup", function(req,res){
  const newUser = {
    fullName: req.body.myName,
    password: req.body.myPassword,
    email: req.body.myEmail
  };
  credentials.push(newUser);
  console.log(credentials);
  
})

// 404 route
app.get("/:id", (req,res)=>{
    res.render("404");
})


// Listening Server
app.listen(5000, ()=>{
    console.log("Server started on Port: 5000");
})

