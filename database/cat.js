var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/data1");


var data = [{
    name: "gokul js",
    age: 100,
    place: "banglore"
}]


var data1 = mongoose.model("data1", data)