var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var campground = require("./models/campground")
var seeddb = require("./seeds")



// app config

seeddb();
mongoose.connect("mongodb://localhost:27017/yelpcamp", { useNewUrlParser: true, useUnifiedTopology: true });
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));



app.get("/", function(req, res) {
    res.render("landing")
});


app.get("/campgrounds", function(req, res) {

    // getting all the data from database 

    campground.find({}, function(err, campgrounds) {
        if (err) {
            console.log(err);
        } else {

            res.render("campgrounds/index", { campgrounds: campgrounds });
            console.log("done");

        }
    })


    // the rendering the file 


})


app.post("/campgrounds", function(req, res) {

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
            console.log(campground);
            console.log("got created");
            res.redirect("/campgrounds");
        }

    })

    // campgrounds.push(newcampground);

    // get data from form add to the campground array
    // redirect back to campgrounds page 


});


app.get("/campgrounds/new", function(req, res) {
    res.render("campgrounds/new");
});

// show page 
// it is the page that displays more information of one campground 

app.get("/campgrounds/:id", function(req, res) {

    // capture that id 
    // render the show page with that id
    console.log(req.params.id);
    campground.findById(req.params.id).populate("comments").exec(function(err, foundcampground) {

        if (err) {
            console.log(err);
        } else {
            console.log("foundcampground")
            console.log(foundcampground);
            res.render("campgrounds/show", { campground: foundcampground });
        }

    });



})

// ============================================================
// comment routes
// ======================================================

app.get("/campgrounds/:id/comments/new", function(req, res) {
    res.render("comments/new");
})











app.listen(3000, function() {
    console.log("server has started");

});