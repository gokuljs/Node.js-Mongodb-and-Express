var mongoose = require("mongoose");

var campgroundschema = new mongoose.Schema({
    name: String,
    image: String,
    desc: String,
    author: {
        id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "user",
        },
        username: String,
    },
    comments: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "comment"

    }]
});


// when we require campgorund.js in app.js we will get this model

module.exports = mongoose.model("campground", campgroundschema);