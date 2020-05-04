var express = require("express");
var router = express.Router();
var campground = require("../models/campground");
//campground routes 

router.get("/campgrounds", function(req, res) {

    // getting all the data from database 
    console.log(req.user);

    campground.find({}, function(err, campgrounds) {
        console.log(req.user);
        if (err) {
            console.log(err);
        } else {

            res.render("campgrounds/index", { campgrounds: campgrounds, currentuser: req.user });
            console.log("done");

        }
    })


    // the rendering the file 


})


router.post("/campgrounds", function(req, res) {

    // res.send("you hit the post route ");

    var name = req.body.name;
    var image = req.body.image;
    var description = req.body.description;
    console.log(name);
    console.log(image);
    var newcampground = {
        name: name,
        image: image,
        desc: description,
    }
    campground.create(newcampground, function(err, campground) {

        if (err) {
            console.log(err);
        } else {
            // console.log(campground);
            console.log("got created");
            res.redirect("/campgrounds");
        }

    })

    // campgrounds.push(newcampground);

    // get data from form add to the campground array
    // redirect back to campgrounds page 


});


router.get("/campgrounds/new", function(req, res) {
    res.render("campgrounds/new");
});

// show page 
// it is the page that displays more information of one campground 

router.get("/campgrounds/:id", function(req, res) {

    // capture that id 
    // render the show page with that id
    console.log(req.params.id);
    campground.findById(req.params.id).populate("comments").exec(function(err, foundcampground) {

        if (err) {
            console.log(err);
        } else {
            console.log("foundcampground")
                // console.log(foundcampground);
            res.render("campgrounds/show", { campground: foundcampground });
        }

    });



});

module.exports = router;