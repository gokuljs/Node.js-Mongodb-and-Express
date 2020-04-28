var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/data1");

var data = new mongoose.Schema({ // first creating a patterns 

    name: String,
    age: Number,
    place: String
});
// compiling into a model and storing it in datas 

var datas = mongoose.model("datas", data);

// storing all the information in db
// var george = new datas({
//     name: "gokusdsdljs",
//     age: 11,
//     place: "banglore",

// });

// george.save(function(err, datas) {
//     if (err) {
//         console.log("error ")
//     } else {
//         console.log(datas)
//     }

// });

datas.create({
    name: "dheeraj",
    age: 23,
    place: "banglore",

}, function(err, datas) {

    if (err) {
        console.log(err);
    } else {
        console.log(datas);
    }



});


// // retrive all data from db and console.log each one 
// datas.find({}, function(err, datas) {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log(datas);
//     }
// })