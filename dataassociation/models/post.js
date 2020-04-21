var mongoose = require("mongoose");

var postSchema = mongoose.Schema({
    title: String,
    content: String,

});
// post will have title and content



module.exports = mongoose.model("post", postSchema);