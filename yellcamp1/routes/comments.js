var express = require("express");
var router = express.Router();
var campground = require("../models/campground");
var comment = require("../models/comment");

// ============================================================
// comment routes
// ======================================================


router.get("/campgrounds/:id/comments/new", isLoggedIn, function(req, res) {
    console.log(req.params.id);
    campground.findById(req.params.id, function(err, foundcampgroud) {
        if (err) {
            console.log(err);
        } else {
            // console.log(foundcampground);
            // console.log(foundcampgroud);

            // res.send("hello");
            res.render("comments/new", { campground: foundcampgroud });
        }

    });


});



router.post("/campgrounds/:id/comments", isLoggedIn, function(req, res) {
    // we are adding login middle ware because 
    console.log(req.params.id);
    campground.findById(req.params.id, function(err, foundcampground) {
        if (err) {
            console.log(err);
            res.redirect("/campgrounds");
        } else {
            // console.log(foundcampground);
            console.log(req.body.comment);
            comment.create(req.body.comment, function(err, comment) {
                if (err) {
                    console.log(err);
                } else {
                    // console.log(comment);
                    console.log("current user who is logged in " + req.user.username);
                    // console.log(req.user.username); // this is working because of the authentication taking place in the username 
                    comment.author.id = req.user.id;
                    comment.author.username = req.user.username;
                    console.log("printing out comment.author.username");

                    console.log(comment.author.username);
                    comment.save();
                    console.log("your comment looks like");
                    console.log(comment);
                    foundcampground.comments.push(comment);
                    foundcampground.save();

                    // console.log(foundcampground);
                    res.redirect("/campgrounds/" + foundcampground._id);
                }
            });


        }

    });
    // lookup campgrounds using id 
    // create new comment 
    // the push that campgrounds into campgrounds 
    //redirect back to campground show page 


});



function isLoggedIn(req, res, next) {
    console.log("authentication starting")
    if (req.isAuthenticated()) {
        return next();
    }
    res.redirect("/login");

}

module.exports = router;