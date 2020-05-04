var mongoose = require("mongoose");
var commentSchema = new mongoose.Schema({
    text: String,
    author: {
        id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "user",
            // ref to model we are going to represent with respect to opect id

        },
        username: String,
    }
})

module.exports = mongoose.model("comment", commentSchema);