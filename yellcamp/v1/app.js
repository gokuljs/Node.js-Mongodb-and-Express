var express = require("express");
var app = express();
var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");

var campgrounds = [
    { name: "Mountains", image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60", },
    { name: "Art", image: "https://images.unsplash.com/photo-1551913902-c92207136625?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60", },
    { name: "Pattern", image: "https://images.unsplash.com/photo-1482160549825-59d1b23cb208?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60", },


    { name: "Mountains", image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60", },
    { name: "Art", image: "https://images.unsplash.com/photo-1551913902-c92207136625?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60", },
    { name: "Pattern", image: "https://images.unsplash.com/photo-1482160549825-59d1b23cb208?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60", },
    { name: "Mountains", image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60", },
    { name: "Art", image: "https://images.unsplash.com/photo-1551913902-c92207136625?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60", },
    { name: "Pattern", image: "https://images.unsplash.com/photo-1482160549825-59d1b23cb208?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60", },

];

app.get("/", function(req, res) {
    // res.send("landing page");
    res.render("landing")
});

app.get("/campgrounds", function(req, res) {

    res.render("campground", { campgrounds: campgrounds });
});


app.post("/campgrounds", function(req, res) {

    // get data from form and add it to array 

    var name = req.body.name;
    var image = req.body.image;
    console.log(name);
    console.log(image);
    var newcampground = {
            name: name,
            image: image,
        }
        // redirect back to campgrounds page 
        //res.send("you have enntered the post request part ");\
    campgrounds.push(newcampground);
    res.redirect("/campgrounds");




});

app.get("/campgrounds/new", function(req, res) {
    res.render("new");
});








app.listen(3000, function() {
    console.log("yellcamp server has satrted ")
});