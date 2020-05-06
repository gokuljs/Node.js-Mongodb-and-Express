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


router.post("/campgrounds", isLoggedIn, function(req, res) {

    // res.send("you hit the post route ");

    var name = req.body.name;
    var image = req.body.image;
    var description = req.body.description;
    console.log(req.user); //  which only works if user is only logged in 
    console.log(name);
    console.log(image);
    var author = {
        id: req.user._id,
        username: req.user.username,
    }
    var newcampground = {
        name: name,
        image: image,
        desc: description,
        author: author,
    }
    campground.create(newcampground, function(err, campground) {

        if (err) {
            console.log(err);
        } else {
            // console.log(campground);
            console.log("got created");
            console.log(campground);
            res.redirect("/campgrounds");
        }

    })

    // campgrounds.push(newcampground);

    // get data from form add to the campground array
    // redirect back to campgrounds page 


});


router.get("/campgrounds/new", isLoggedIn, function(req, res) {
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

// edit campground route
router.get("/campgrounds/:id/edit", function(req, res) {

    console.log(req.params.id);
    campground.findById(req.params.id, function(err, foundcampground) {
        if (err) {
            console.log(err)
        } else {
            console.log(foundcampground);
            res.render("campgrounds/edit", { campground: foundcampground })
        }


    });


    // res.send("edit campground rout");

});


router.put("/campgrounds/:id", function(req, res) {
    console.log("put request")
    console.log(req.body.campground);

    campground.findByIdAndUpdate(req.params.id, req.body.campground, function(err, updatecampground) {
        if (err) {
            console.log(err);
            // res.redirect("/");
        } else {
            res.redirect("/campgrounds/" + req.params.id);
        }
    })

});
// update campground route 


function isLoggedIn(req, res, next) {
    console.log("authentication starting")
    if (req.isAuthenticated()) {
        return next();
    }
    res.redirect("/login");

}

module.exports = router;