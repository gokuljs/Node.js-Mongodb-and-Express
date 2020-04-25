// error driven development 
// where we write some code that we want to work and if errors are developed we rectify them 
// the continue untill everything works
// seed js file will will all the data from database 
// and we give duplicate data and check 
var mongoose = require("mongoose");
var campground = require("./models/campground");


function seeddb() {


    campground.remove({}, function(err) {
        if (err) {
            console.log(err);
        } else {
            console.log("data has been removed from database");

        }
    });

}

module.exports = seeddb;