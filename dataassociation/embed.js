var mongoose = require("mongoose");
// app config
mongoose.connect("mongodb://localhost:27017/embeddeddata", { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.set('useFindAndModify', false);


// user having email and name 


var postSchema = mongoose.Schema({
    title: String,
    content: String,

});
// post will have title and content



var post = mongoose.model("post", postSchema);

var userSchema = new mongoose.Schema({
    name: String,
    email: String,
    posts: [postSchema],
});
var user = mongoose.model("user", userSchema);


// var newuser = new user({
//     name: "dheeraj",
//     email: "dheerajc@gmail.com",
//     posts: [{

//         title: "gamer review",
//         content: "welcome  gamer",
//     }]

// });


// newuser.save(function(err, blog) {

//     if (err) {
//         console.log(err);
//     } else {
//         console.log(blog);
//     }

// });





// var newpost = new post({
//     title: "welcome to new String ",
//     content: "helllo getting started with embede data and data association  "
// })


user.findOne({ name: "dheeraj" }, function(err, user) {
    if (err) {
        console.log(err);
    } else {
        console.log(user);
        user.posts.push({
            title: "3 thing i really are",
            content: "gamer, coder , changer",
        });

        user.save(function(err, user) {
            if (err) {
                console.log(err);
            } else {
                console.log(user);
            }
        });
    }

});