// ============================================================
// comment routes
// ======================================================

app.get("/campgrounds/:id/comments/new", isLoggedIn, function(req, res) {
    console.log(req.params.id);
    campground.findById(req.params.id, function(err, foundcampgroud) {
        if (err) {
            console.log(err);
        } else {
            // console.log(foundcampground);
            // console.log(foundcampgroud);

            // res.send("hello");
            res.render("comments/new", { campground: foundcampgroud });
        }

    });


});

// we are adding login middle ware because 
app.post("/campgrounds/:id/comments", isLoggedIn, function(req, res) {

    console.log(req.params.id);
    campground.findById(req.params.id, function(err, foundcampground) {
        if (err) {
            console.log(err);
            res.redirect("/campgrounds");
        } else {
            // console.log(foundcampground);
            console.log(req.body.comment);
            comment.create(req.body.comment, function(err, comment) {
                if (err) {
                    console.log(err);
                } else {
                    // console.log(comment);
                    foundcampground.comments.push(comment);
                    foundcampground.save();
                    console.log(foundcampground);
                    res.redirect("/campgrounds/" + foundcampground._id);
                }
            });


        }

    });
    // lookup campgrounds using id 
    // create new comment 
    // the push that campgrounds into campgrounds 
    //redirect back to campground show page 


});