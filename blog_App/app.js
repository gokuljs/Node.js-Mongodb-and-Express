var express = require("express");
var app = express();
var bodyparser = require("body-parser");
var mongoose = require("mongoose");
app.use(express.static("public"));
app.set("view engine", "ejs");
mongoose.connect("mongodb://localhost:27017/blog_app", { useNewUrlParser: true, useUnifiedTopology: true });
app.use(bodyparser.urlencoded({ extended: true }));

app.get("/blogs", function(req, res) {
    res.render("index");

});


app.listen(3000, function() {
    console.log("server has started");
})