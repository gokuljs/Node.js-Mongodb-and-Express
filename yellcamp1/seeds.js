// error driven development 
// where we write some code that we want to work and if errors are developed we rectify them 
// the continue untill everything works
// seed js file will will all the data from database 
// and we give duplicate data and check 
var mongoose = require("mongoose");
var campground = require("./models/campground");
var comment = require("./models/comment");

var data = [{
        name: "gokul js",
        image: "https://images.unsplash.com/photo-1558981822-0c0c5b070026?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
        desc: "he undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of  (The Extremes of  The first line of Lorem Ipsumcomes from a line in section 1.10.32.",
    },
    {
        name: "dheeraj jc",
        image: "https://images.unsplash.com/photo-1587802659513-7748a6e21f0c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
        desc: "he undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of  (The Extremes of  The first line of Lorem Ipsumcomes from a line in section 1.10.32.",

    },
    {
        name: "dheeraj jc",
        image: "https://images.unsplash.com/photo-1587802659513-7748a6e21f0c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
        desc: "he undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of  (The Extremes of  The first line of Lorem Ipsumcomes from a line in section 1.10.32.",
    }
]


function seeddb() {

    // remove all campgrounds first 


    campground.remove({}, function(err) {
        if (err) {
            console.log(err);
        } else {
            console.log("data has been removed from database");
            data.forEach(function(data) {
                campground.create(data, function(err, campground) {
                    if (err) {
                        console.log(err);
                    } else {
                        console.log(campground);
                        console.log("added new campgroud");
                        comment.create({
                            text: "this bike looks great",
                            author: "gokul js",
                        }, function(err, comment) {
                            if (err) {
                                console.log(err);
                            } else {
                                campground.comments.push(comment);
                                campground.save();
                                console.log("new comment created");
                            }
                        });
                    }
                });


            });

        }
    });

    // after removing add new 


}

module.exports = seeddb;