var express = require("express");
var app = express();
var request = require("request");
app.set("view engiene", "ejs")

app.get("/results", function(req, res) {
    request("http://www.omdbapi.com/?s=californian&apikey=thewdb", function(error, response, body) {
        if (!error && response.statusCode == 200) {
            var result = JSON.parse(body);
            res.send(result["Search"][0]["Title"]);
        }
    })
});

app.listen(3000, function() {

    console.log("movi search app as started");
})