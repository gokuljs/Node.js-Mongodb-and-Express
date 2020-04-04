var express = require("express");
var app = express();

app.set("view engine", "ejs");

app.get("/", function(req, res) {
    res.render("home");

});

app.post("/addfriend", function(req, res) {

    console.log(req.body);
    //Node.js body parsing middleware.

    // req.body will contain the i nformation coming from the body
    //Note As req.body's shape is based on user-controlled input, all properties and values in this object are untrusted and should be validated before trusting. For example, req.body.foo.toString() may fail in multiple ways, for example the foo property may not be there or may not be a string, and toString may not be a function and instead a string or other user input.
    res.send("you have reached the posting part");

});

app.get("/friends", function(req, res) {
    var friend = ["dheeraj", "archith", "lal", "brj", "absk_x"];
    res.render("friends", { friends: friend });

});



app.listen(3000, function() {
    console.log("server as started");
});