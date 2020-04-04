var express = require("express");
var app = express();

app.set("view engine", "ejs");

app.get("/", function(req, res) {
    res.render("home");

});

app.get("/friends", function(req, res) {
    var friend = ["dheeraj", "archith", "lal", "brj", "absk_x"];
    res.render("friends", { friends: friend });

});



app.listen(3000, function() {
    console.log("server as started");
});