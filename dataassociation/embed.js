var mongoose = require("mongoose");
// app config
mongoose.connect("mongodb://localhost:27017/embeddeddata", { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.set('useFindAndModify', false);


// user having email and name 


var userSchema = new mongoose.Schema({
    name: String,
    email: String,
});


var user = mongoose.model("user", userSchema);


// post will have title and content


var postSchema = mongoose.Schema({
    title: String,
    content: String,

});

var post = mongoose.model("post", postSchema);


var newuser = new user({
    name: "gokul js ",
    email: "jsgokul123@gmail.com"
})

newuser.save(function(err, user) {
    if (err) {
        console.log(err);
    } else {
        console.log(user)
    }
})