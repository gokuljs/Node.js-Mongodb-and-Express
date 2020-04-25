var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var campground = require("./models/campground")



// app config
mongoose.connect("mongodb://localhost:27017/yelpcamp", { useNewUrlParser: true, useUnifiedTopology: true });
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));


// creating a new schema 



// campground.create({
//     name: "first Schema",
//     image: "https://images.unsplash.com/photo-1587605135886-2a3ba0ec581c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1354&q=80",
//     desc: "testing my first schema by adding description and checking it works or not",
// }, function(err, campground) {

//     if (err) {
//         console.log(err);
//     } else {
//         console.log("created ");
//         console.log(campground);
//     }

// });




// var campgrounds = [

//     { name: "gokul", image: "https://images.unsplash.com/photo-1587563136951-8276088e9725?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" },
//     { name: "gokul", image: "https://images.unsplash.com/photo-1587563136951-8276088e9725?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" },
//     { name: "gokul", image: "https://images.unsplash.com/photo-1587563136951-8276088e9725?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" },
//     { name: "gokul", image: "https://images.unsplash.com/photo-1587563136951-8276088e9725?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" },

//     { name: "gokul", image: "https://images.unsplash.com/photo-1587563136951-8276088e9725?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" },
//     { name: "gokul", image: "https://images.unsplash.com/photo-1587563136951-8276088e9725?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" },
//     { name: "gokul", image: "https://images.unsplash.com/photo-1587563136951-8276088e9725?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" },
//     { name: "gokul", image: "https://images.unsplash.com/photo-1587563136951-8276088e9725?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" },

// ];



app.get("/", function(req, res) {
    res.render("landing")
});


app.get("/campgrounds", function(req, res) {

    // getting all the data from database 

    campground.find({}, function(err, campgrounds) {
        if (err) {
            console.log(err);
        } else {

            res.render("index", { campgrounds: campgrounds });
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
    res.render("new");
});

// show page 
// it is the page that displays more information of one campground 

app.get("/campgrounds/:id", function(req, res) {

    // capture that id 
    // render the show page with that id
    console.log(req.params.id);
    campground.findById(req.params.id, function(err, foundcampground) {

        if (err) {
            console.log(err);
        } else {
            res.render("show", { campground: foundcampground });
        }

    });



})












app.listen(3000, function() {
    console.log("server has started");

});