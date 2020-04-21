// error drivem devlopment 
var mongoose = require("mongoose");
var campground = require("./models/campground");
var comment = require("./models")


// campground.remove({}, function(err) {
//     if (err) {
//         console.log(err);
//     }
//     console.log("removed campgrounds");
// })

var data = [{
        name: "image",
        img: "https://images.unsplash.com/photo-1587316807833-7008b6d63a4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
        desc: "uwcgscjskcsbvhkn skfhsfhskfbshfsk sksdpsslkdskdhsdksadjksskjcbsbcbskcsjcsgcsabcsgcsjbcsg"
    },
    {
        name: "image",
        img: "https://images.unsplash.com/photo-1587316807833-7008b6d63a4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
        desc: "uwcgscjskcsbvhkn skfhsfhskfbshfsk sksdpsslkdskdhsdksadjksskjcbsbcbskcsjcsgcsabcsgcsjbcsg"
    }, {
        name: "image",
        img: "https://images.unsplash.com/photo-1587316807833-7008b6d63a4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
        desc: "uwcgscjskcsbvhkn skfhsfhskfbshfsk sksdpsslkdskdhsdksadjksskjcbsbcbskcsjcsgcsabcsgcsjbcsg"
    }, {
        name: "image",
        img: "https://images.unsplash.com/photo-1587316807833-7008b6d63a4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
        desc: "uwcgscjskcsbvhkn skfhsfhskfbshfsk sksdpsslkdskdhsdksadjksskjcbsbcbskcsjcsgcsabcsgcsjbcsg"
    },
];



function seeddb() {
    campground.remove({}, function(err) {
        if (err) {
            console,
            log(err);
        }
        else {

            data.forEach(function(seed) {

                campground.create(seed, function(err, campgrounds) {
                    if (err) {
                        console.log(err);
                    } else {
                        console.log(data);
                        // creating a campground\
                        comment.create({
                            text: "this place is great i wish there was an internet ",
                            auther: "homer",
                        }, function(err, comment) {
                            if (err) {
                                console.log(err);
                            } else {
                                campground.comments.push(comment);
                                campground.save();
                                console.log("created new comment");
                            }



                        });
                    }
                })

            })
        }

    });

    // add gew campgrounds

}

module.exports = seeddb;