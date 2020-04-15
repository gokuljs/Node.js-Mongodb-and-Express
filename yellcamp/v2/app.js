var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
//mongoose.connect("mongodb://localhost:27017/yelpcamp", { useNewUrlParser: true }); // exact same syntax should be used everytime to remove the depriciated  warning 
//27017 represents the port number in which the mongodb is working on 
mongoose.connect("mongodb://localhost:27017/yelpcamp", { useNewUrlParser: true, useUnifiedTopology: true });

app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");

//schema setup
var campgroundschema = new mongoose.Schema({
    name: String,
    img: String,
});

var campground = mongoose.model("campground", campgroundschema);

// campground.create({
//     name: "Mountains",
//     img: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
// }, function(err, campground) {
//     if (err) {
//         console.log("err");
//     } else {
//         // console.log(campground);
//         console.log(done);
//     }
// });




app.use(express.static("public"));

// var campgrounds = [
//     { name: "Mountains", image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60", },
//     { name: "Art", image: "https://images.unsplash.com/photo-1551913902-c92207136625?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60", },
//     { name: "Pattern", image: "https://images.unsplash.com/photo-1482160549825-59d1b23cb208?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60", },


//     { name: "Mountains", image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60", },
//     { name: "Art", image: "https://images.unsplash.com/photo-1551913902-c92207136625?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60", },
//     { name: "Pattern", image: "https://images.unsplash.com/photo-1482160549825-59d1b23cb208?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60", },
//     { name: "Mountains", image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60", },
//     { name: "Art", image: "https://images.unsplash.com/photo-1551913902-c92207136625?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60", },
//     { name: "Pattern", image: "https://images.unsplash.com/photo-1482160549825-59d1b23cb208?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60", },

// ];

app.get("/", function(req, res) {
    // res.send("landing page");
    res.render("landing")
});

app.get("/campgrounds", function(req, res) {
    //get all campgrounds from db and render that file

    campground.find({}, function(err, allcampgrounds) {
        if (err) {
            console.log(err);
        } else {

            res.render("campground", { campgrounds: allcampgrounds })
        }

    });

    // res.render("campground", { campgrounds: campgrounds });
});


// app.post("/campgrounds", function(req, res) {

//     // get data from form and add it to array 

//     // var name = req.body.name;
//     // var image = req.body.image;
//     // console.log(name);
//     // console.log(image);
//     // var newcampground = {
//     //         name: name,
//     //         image: image,
//     //     }
//     //     // redirect back to campgrounds page 
//     //     //res.send("you have enntered the post request part ");\
//     //     // campgrounds.push(newcampground);
//     // res.redirect("/campgrounds");
//     res.render("you hit the post route")




// });

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


app.get("/campgrounds/new", function(req, res) {
    res.render("new");
});








app.listen(3000, function() {
    console.log("yellcamp server has started  ")
});