var express = require("express");
var router = express.Router();
var passport = require("passport");
var user = require("../models/user");


router.get("/", function(req, res) {
    res.render("landing")
});



// ======================================================================
// auth routes
// ===================================================================

// show the register form 
router.get("/register", function(req, res) {
    // res.send("welcome to register form ");
    res.render("register")
})

router.post("/register", function(req, res) {
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
router.get("/login", function(req, res) {
    res.render("login");
});

//app,post("routes",middleware,callback)
router.post("/login", passport.authenticate('local', {
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
router.get("/logout", function(req, res) {
    req.logout();
    res.redirect("/");
});


// creating a middle ware to ccheck that user has logged in or not 
function isLoggedIn(req, res, next) {
    console.log("authentication starting")
    if (req.isAuthenticated()) {
        return next();
    }
    res.redirect("/login");

}

module.exports = router;