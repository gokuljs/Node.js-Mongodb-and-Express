var express = require("express");
var app = express();
var bodyparser = require("body-parser");
var mongoose = require("mongoose");
app.use(bodyparser.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.use(express.static("public"));
mongoose.connect("mongodb://localhost:27017/blog_app", { useNewUrlParser: true, useUnifiedTopology: true });

// normally our blog post will 
// title
// image 
// body 
// created which is date
// creating mongoose database pattern
var blogschema = new mongoose.Schema({
    title: String,
    image: String,
    body: String,
    created: { type: Date, default: Date.now } //setting date to current date giving date.now
});
// converting mongoose database schema into a model
var blog = mongoose.model("blog", blogschema);

// blog.create({
//     title: "astronaut",
//     image: "https://images.unsplash.com/photo-1586999082731-574a06ec7e25?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
//     body: "This is a blog post",
// }, function(err, blog) {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log(blog);
//     }
// });

//Restful routes 
app.get("/blogs", function(req, res) {
    res.send("welcome to index page ");

});



app.listen(3000, function() {
    console.log("blog server has started");
})