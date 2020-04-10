var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/cat_app");

// first goind adiing all cats to database
//then retrive all cats from database

var catSchema = new mongoose.Schema({
    name: String,
    age: Number,
    temperament: String,
}); //the process of declaring a pattern to the database

// now the pattern which we declared should be converted into model
// now this model should be passed to singular variable
// we cann use that variable to find ,remove ,create ,update 

var Cat = mongoose.model("cat", catSchema);