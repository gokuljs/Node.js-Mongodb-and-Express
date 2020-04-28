var express = require("express");
var app = express();


app.get("/", function(req, res) {
    res.send("welcome to my new assignment ");
});

app.get("/speak/:animal", function(req, res) {
    var animal = req.params.animal.toLowerCase();

    // if (animal === "pig") {
    //     sound = "oink";

    // } else if (animal === "cow") {
    //     sound = "moo";
    // } or 

    // buy using the concept of dictionaries 
    var sounds = {
        pig: "oink",
        cow: "moo",
        cat: "i hate ypu human",
        dog: "woof woof",
        fish: "...."
    }
    var sound = sounds[animal];


    res.send("the " + animal + " says " + sound);
});

app.get("/repeat/:message/:times", function(req, res) {
    var message = req.params.message;
    var times = req.params.times;
    var result = "";
    // res.send("message :" + message + " times :" + times);
    for (var i = 0; i < times; i++) {
        result = result + message + " ";
    }
    res.send(result);

});

app.get("*", function(req, res) {
    res.send("page not found !");
});

app.listen(3000, function() {
    console.log("server connected");
});