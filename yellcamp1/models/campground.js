var mongoose = require("mongoose");

var campgroundschema = new mongoose.Schema({
    name: String,
    image: String,
    desc: String,

});


module.exports = mongoose.model("campground", campgroundschema);