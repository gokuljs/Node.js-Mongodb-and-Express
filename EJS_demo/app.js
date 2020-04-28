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
app.get("/fallinlovewith/:name", function(req, res) {
    var name = req.params.name;
    res.render("love", { thingvar: name }); // accepting the variable and passing it as an object in love.ejs file
    console.log(name);

    // .ejs stands for embedded javascript 
    // which lets embbed javascript code 
});

app.get("/posts", function(req, res) {
    var posts = [{
            title: "post 1",
            author: "gokuljs",

        },
        {
            title: "post 2",
            author: "ash",

        }, {
            title: "post 3",
            author: "dhe",

        }

    ];

    res.render("post", { posts: posts });
});
app.listen(3000, function() {
    console.log("server is listening");
});