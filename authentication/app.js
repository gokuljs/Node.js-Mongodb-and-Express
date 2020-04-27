var express = require("express");
var app = express();
var mongoose = require("mongoose");
var bodyparser = require("body-parser");






app.listen(3000, function(req, res) {
    console.log("server has started");
})