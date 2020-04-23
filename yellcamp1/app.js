var express = require("express");
var app = express();
var bodyParser = require("body-parser");



// app config
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

var campgrounds = [

    { name: "gokul", image: "https://images.unsplash.com/photo-1587563136951-8276088e9725?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" },
    { name: "gokul", image: "https://images.unsplash.com/photo-1587563136951-8276088e9725?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" },
    { name: "gokul", image: "https://images.unsplash.com/photo-1587563136951-8276088e9725?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" },
    { name: "gokul", image: "https://images.unsplash.com/photo-1587563136951-8276088e9725?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" },

    { name: "gokul", image: "https://images.unsplash.com/photo-1587563136951-8276088e9725?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" },
    { name: "gokul", image: "https://images.unsplash.com/photo-1587563136951-8276088e9725?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" },
    { name: "gokul", image: "https://images.unsplash.com/photo-1587563136951-8276088e9725?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" },
    { name: "gokul", image: "https://images.unsplash.com/photo-1587563136951-8276088e9725?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" },

];



app.get("/", function(req, res) {
    res.render("landing")
});


app.get("/campgrounds", function(req, res) {

    res.render("campground", { campgrounds: campgrounds });
})


app.post("/campgrounds", function(req, res) {

    // res.send("you hit the post route ");

    var name = req.body.name;
    var image = req.body.image;
    var newcampground = {
        name: name,
        image: image,
    }

    campgrounds.push(newcampground);
    res.redirect("/campgrounds");
    // get data from form add to the campground array
    // redirect back to campgrounds page 


});


app.get("/campgrounds/new", function(req, res) {
    res.render("new");
});
app.listen(3000, function() {
    console.log("server has started");

});