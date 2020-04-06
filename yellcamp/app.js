var express = require("express");
var app = express();
app.set("view engine", "ejs");

app.get("/", function(req, res) {
    // res.send("landing page");
    res.render("landing")
});

app.get("/campgrounds", function(req, res) {
    var campgrounds = [
        { name: "mountains", image: "https://lh3.googleusercontent.com/proxy/moNZl7sbmHTDLR4ox6WUmcyC--rNw-b7b5XJEQ9royBath4CV09JOjVMO5ghw-CPPrEDKg3tUPJQUlQZhOg50wtyCV6-k7zdRYF3dFrT9sexGMVuaWiYWc1PHoAAtj-XMHe9xpzodBrAf1YtB00-2ZMPasTlfG_aRg", },
        { name: "art", image: "https://images.unsplashttps://lh3.googleusercontent.com/proxy/moNZl7sbmHTDLR4ox6WUmcyC--rNw-b7b5XJEQ9royBath4CV09JOjVMO5ghw-CPPrEDKg3tUPJQUlQZhOg50wtyCV6-k7zdRYF3dFrT9sexGMVuaWiYWc1PHoAAtj-XMHe9xpzodBrAf1YtB00-2ZMPasTlfG_aRgh.com/photo-1551913902-c92207136625?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60", },
        { name: "pattern", image: "https://images.unsplash.com/photo-1515387784663-e2e29a23f69e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2134&q=80.jpg", },

    ];
    res.render("campground", { campgrounds: campgrounds });
});
app.listen(3000, function() {
    console.log("yellcamp server has satrted ")
});