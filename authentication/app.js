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
    resave: false,
    saveUninitialized: false,
}));


// very important methods on passport 
// responsible for reading the session that is encoded 
// unencoding it that comes under deserialize
// this methods are directly added into user.js in models when you pass passport local mongoose

passport.serializeUser(user.serializeUser());
passport.deserializeUser(user.deserializeUser());






app.get("/", function(req, res) {
    res.render("home");
});

app.get("/secret", function(req, res) {
    res.render("secret");
})






app.listen(3000, function() {
    console.log("server has started ............");
})