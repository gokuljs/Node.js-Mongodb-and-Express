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


router.post("/campgrounds/:id/comments", function(req, res) {

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
                    foundcampground.comments.push(comment);
                    foundcampground.save();
                    console.log(foundcampground);
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