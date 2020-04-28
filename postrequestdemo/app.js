var express = require("express");
var app = express(); //intialising the express

var bodyparser = require("body-parser");
// intialising the body parser to the variable 
// syntax for telling the express to use body-parser
app.use(bodyparser.urlencoded({ extended: true })); // telling express to use body parser


app.set("view engine", "ejs"); //  creating a default file ejs
var friends = ["dheeraj", "archith", "lal", "brj", "absk_x"]; // global declaration  of friends 
// so all the routes can read it


app.get("/", function(req, res) {
    res.render("home");

});

app.post("/addfriend", function(req, res) {

    var newfriend = req.body.newfriend // this is get data from the website bode 
        // for this to work u have install a package body-parser
        // tell the express to use body-parser 

    friends.push(newfriend);
    //Node.js body parsing middleware.

    // req.body will contain the i nformation coming from the body
    //Note As req.body's shape is based on user-controlled input, all properties and values in this object are untrusted and should be validated before trusting. For example, req.body.foo.toString() may fail in multiple ways, for example the foo property may not be there or may not be a string, and toString may not be a function and instead a string or other user input.
    res.redirect("/friends"); // it will redirect to the path web page 

});

app.get("/friends", function(req, res) {

    res.render("friends", { friends: friends });

});



app.listen(3000, function() {
    console.log("server as started");
});