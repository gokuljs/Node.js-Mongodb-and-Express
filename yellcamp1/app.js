var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var campground = require("./models/campground")
var comment = require("./models/comment");
var passport = require("passport");
var localStratergy = require("passport-local");
var user = require("./models/user");
var seeddb = require("./seeds")



// app config

seeddb();
mongoose.connect("mongodb://localhost:27017/yelpcamp", { useNewUrlParser: true, useUnifiedTopology: true });
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));
// dirname refers to the directory name to the script was running 
console.log(__dirname);


app.use(bodyParser.urlencoded({ extended: true }));

app.use(function(req, res, next) {
    // we are passing newuser to all the templates available 
    res.locals.currentuser = req.user;
    next();
})


// passport configuration 
app.use(require("express-session")({
    secret: "i have msi laptop",
    resave: false,
    saveUninitialized: false,


}));
app.use(passport.initialize());
// So basically passport.initialize() initialises the authentication module.
// passport.session() is another middleware that alters the request object and change the 'user' value that is currently the session id (from the client cookie) into the true deserialized user object. It is explained in detail here.
app.use(passport.session());
passport.use(new localStratergy(user.authenticate()));
passport.serializeUser(user.serializeUser());
passport.deserializeUser(user.deserializeUser());




app.get("/", function(req, res) {
    console.log(req.user); // this shows all the users that are currently logged in
    res.render("landing")
});




// ======================================================================
// auth routes
// ===================================================================

// show the register form 
app.get("/register", function(req, res) {
    // res.send("welcome to register form ");
    res.render("register")
})

app.post("/register", function(req, res) {
    console.log("getting ur username and password");
    console.log(req.body.username);
    console.log(req.body.password);
    // res.send("you have reached post route");
    var newuser = new user({
        username: req.body.username,
    })
    user.register(newuser, req.body.password, function(err, user) {
        if (err) {
            console.log(err);
            return res.render("register");
        }
        passport.authenticate("local")(req, res, function() {
            res.redirect("/campgrounds");
        })
    });
})


// login 
app.get("/login", function(req, res) {
    res.render("login");
});

//app,post("routes",middleware,callback)
app.post("/login", passport.authenticate('local', {
    successRedirect: "/campgrounds",
    failureRedirect: "/login",
}), function(req, res) {
    // res.send("reached login page");
    console.log("getting ur username and password");
    console.log(req.body.username);
    console.log(req.body.password);
    console.log("login")
});

//logout route 
app.get("/logout", function(req, res) {
    req.logout();
    res.redirect("/campgrounds");
});


// creating a middle ware to ccheck that user has logged in or not 
function isLoggedIn(req, res, next) {
    console.log("authentication starting")
    if (req.isAuthenticated()) {
        return next();
    }
    res.redirect("/login");

}


app.listen(3000, function() {
    console.log("server has started");

});