var express = require("express");
var app = express();
var bodyparser = require("body-parser");
var mongoose = require("mongoose");
app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.use(express.static("public"));