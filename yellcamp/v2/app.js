var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
// exact same syntax should be used everytime to remove the depriciated  warning 
//27017 represents the port number in which the mongodb is working on 
mongoose.connect("mongodb://localhost:27017/yelpcamp", { useNewUrlParser: true, useUnifiedTopology: true });

app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");

//schema setup
var campgroundschema = new mongoose.Schema({
    name: String,
    img: String,
    description: String,
});

var campground = mongoose.model("campground", campgroundschema);





app.use(express.static("public"));


app.get("/", function(req, res) {

    res.render("landing")
});

// displays all the campgrounds page 
app.get("/campgrounds", function(req, res) {
    //get all campgrounds from db and render that file

    campground.find({}, function(err, allcampgrounds) {
        if (err) {
            console.log(err);
        } else {

            res.render("campground", { campgrounds: allcampgrounds })
        }

    });

});



app.post("/campgrounds", function(req, res) {
    var name = req.body.name;
    var image = req.body.image;
    var newcampground = {
        name: name,
        img: image,
    }
    campground.create(newcampground, function(err, newlycreated) {
        if (err) {
            console.log(err);
        } else {
            res.redirect("/campgrounds")
        }
    });

});

// form page to add new campgrounds 

app.get("/campgrounds/new", function(req, res) {
    res.render("new");
});


app.get("/campgrounds/:id", function(req, res) {
    res.send("this will be show page one day ")
});







app.listen(3000, function() {
    console.log("yellcamp server has started  ")
});