var express = require("express");
var app = express();
var bodyparser = require("body-parser");
var mongoose = require("mongoose");
var methodOverride = require("method-override");



// app config 
app.use(express.static("public"));
app.set("view engine", "ejs");
mongoose.connect("mongodb://localhost:27017/blog_app", { useNewUrlParser: true, useUnifiedTopology: true });
app.use(bodyparser.urlencoded({ extended: true }));
app.use(methodOverride("_method")); // this tells us that where ever in ur app if _method then treat that request has put request 


var blogschema = new mongoose.Schema({
    title: String,
    image: String,
    body: String,
    created: { type: Date, default: Date.now },


});

var blog = mongoose.model("blog", blogschema);

// blog.create({
//     title: "Test blog",
//     image: "https://images.unsplash.com/photo-1587133599421-40a3cd84831b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80",
//     body: "mac book only fools will buy",
// });

// index route 

app.get("/blogs", function(req, res) {

    blog.find({}, function(err, blog) {
        if (err) {
            console.log(err);
        } else {

            res.render("index", { blogs: blog });
        }
    });

});

// new route
app.post("/blogs", function(req, res) {
    // res.send("you have reached post request ");
    // create blog
    // redirect the web page 
    console.log(req.body.blog);

    blog.create(req.body.blog, function(err, blog) {
        if (err) {
            console.log(err)
        } else {
            res.redirect("/blogs")
        }
    })
});

// adding new post 
app.get("/blogs/new", function(req, res) {
    res.render("new");
});
// show route 
app.get("/blogs/:id", function(req, res) {
    blog.findById(req.params.id, function(err, foundblog) {
        if (err) {
            res.redirect("/blogs");
        } else {
            res.render("show", { blogs: foundblog });
        }
    })
});



//edit route 
app.get("/blogs/:id/edit", function(req, res) {
    console.log("id =" + req.params.id);
    blog.findById(req.params.id, function(err, foundblog) {
        if (err) {
            res.redirect("/blogs");
        } else {
            res.render("edit", { blog: foundblog });
        }

    });

});



// normallly inside form tag the put request inside dosent works 
// its acts as an get request so to able to make it work 
// there is another function called method override 



app.put("/blogs/:id", function(req, res) {
    res.send("update route")
});


app.listen(3000, function() {
    console.log("server has started");
})