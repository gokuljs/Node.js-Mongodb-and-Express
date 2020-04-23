var express = require("express");
var app = express();



// app config
app.set("view engine", "ejs");
app.use(express.static("public"));



app.get("/", function(req, res) {
    res.render("landing")
});


app.get("/campgrounds", function(req, res) {

    var campgrounds = [

        { name: "gokul", image: "https://images.unsplash.com/photo-1587563136951-8276088e9725?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" },
        { name: "gokul", image: "https://images.unsplash.com/photo-1587563136951-8276088e9725?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" },
        { name: "gokul", image: "https://images.unsplash.com/photo-1587563136951-8276088e9725?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" },
    ];
    res.render("campground", { campgrounds: campgrounds });
})
app.listen(3000, function() {
    console.log("server has started");

});