var express = require("express"),
    app = express(),
    bodyParser = require("body-parser"),
    mongoose = require("mongoose"),
    campground = require("./models/campground"),
    comment = require("./models/comment"),
    passport = require("passport"),
    localStratergy = require("passport-local"),
    user = require("./models/user"),
    seeddb = require("./seeds");


var commentroutes = require("./routes/comments"),
    campgroundroutes = require("./routes/campgrounds"),
    indexroutes = require("./routes/index");


// app config

seeddb();
mongoose.connect("mongodb://localhost:27017/yelpcamp", { useNewUrlParser: true, useUnifiedTopology: true });
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));
// dirname refers to the directory name to the script was running 
console.log(__dirname);


app.use(bodyParser.urlencoded({ extended: true }));


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

// this method is for making current user work for all other webpages 


app.use(function(req, res, next) {
    res.locals.currentuser = req.user; //
    //what ever we put inside reslocals thats is available inside our templates 
    next();
    //next is require to run the next middle ware 

});

// refactoring takes place
app.use(campgroundroutes);
app.use(commentroutes);
app.use(indexroutes);






app.listen(3000, function() {
    console.log("server has started");

});