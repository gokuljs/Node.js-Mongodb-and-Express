var express = require("express"),
    app = express(),
    mongoose = require("mongoose"),
    bodyparser = require("body-parser"),
    passport = require("passport"),
    localStrategy = require("passport-local"),
    user = require("./models/user"),
    passportLocalMongoose = require("passport-local-mongoose");



// app config
mongoose.connect("mongodb://localhost:27017/auth_demo_app", { useNewUrlParser: true, useUnifiedTopology: true });
app.set("view engine", "ejs");
app.use(bodyparser.urlencoded({ extended: true }));
//setting to use passport in the project
//below two lines are required to run the passport in the project  
app.use(passport.initialize()); // telling express to use passport
app.use(passport.session())

// app.use(express.static(__dirname + "/public"));
// dirname refers to the directory name to the script was running 
// console.log(__dirname);


// adding express-seesion
// using it and running it has a fucntion
app.use(require("express-session")({
    secret: "welcome to node",
    // by default this should be false

    resave: false,
    saveUninitialized: false,
}));


// very important methods on passport 
// responsible for reading the session that is encoded 
// unencoding it that comes under deserialize
// this methods are directly added into user.js in models when you pass passport local mongoose

passport.serializeUser(user.serializeUser());
passport.deserializeUser(user.deserializeUser());





//===========================================================================================
// routes session 
// auth routes 

// this is to show sign up form 

app.get("/register", function(req, res) {
    res.render("register");
})

// handling user signup 

app.post("/register", function(req, res) {
    // var username = req.body.username;
    // var password = req.body.password;
    console.log(req.body.username);
    console.log(req.body.password);
    // res.send("you reached post route");
    // major place where your going to handle user sign up
    req.body.password // returns password from register,js
    req.body.username // returns username from ""
        // we make new user object and pass only username because dont save the password to database 
        // we sent password seperately as an second argument for user.register  it will hash that password that is srored into database 
    user.register(new user({ username: req.body.username }), req.body.password, function(err, user) {
        if (err) {
            console.log(err);
            return res.render('register');
        } else {
            // here we are passing local startergy 
            // new future if u want to run stratergy like google or twitter etc
            // refer the passport.js docs and convert local to google etc and run 
            passport.authenticate("local")(req, res, function() {
                res.redirect("/secret");

            });

        }
    });


})








app.get("/", function(req, res) {
    res.render("home");
});

app.get("/secret", function(req, res) {
    res.render("secret");
})






app.listen(3000, function() {
    console.log("server has started ............");
})