var express = require("express");
var app = express();



app.use(express.static("public"));
app.set("view engine", "ejs");
app.get("/", function(req, res) {
    //.res.render("dogs.ejs") // html file is passed
    // we trying build a dynamic type of web page 

    //res.send("<h1>welcome to home page</h1><h2>blah blah <        /h2>");
    res.render("home");
});


app.listen(3000, function() {
    console.log("server has started")
})