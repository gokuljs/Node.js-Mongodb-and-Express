 var mongoose = require("mongoose");

 // putting all campground logic into into campground.js

 var campgroundschema = new mongoose.Schema({
     name: String,
     img: String,
     desc: String,
 });

 module.exports = mongoose.model("campground", campgroundschema);