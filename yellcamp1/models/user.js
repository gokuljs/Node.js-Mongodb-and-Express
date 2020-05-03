var mongoose = require("mongoose");
var passportLocalMongoose = require("passport-local-mongoose");
var userSchema = new mongoose.Schema({
    username: String,
    password: String,
})
userSchema.plugin(passportLocalMongoose);
// what it does is it take the user name and password 
// store the username in database and hash the password and store it in database 
// this is the main reason passport local mongoose is used 
module.exports = mongoose.model("user", userSchema);