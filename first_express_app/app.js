var express = require("express"); //importing the express package
var app = express(); // passing all rhe package functionality to the app
// and for using any of the functionality app.functionality name


// route this is part which painly deals with https in and out request 
// "/" reprsents the home which here we going to get hi there 
// "/bye" => you will get good bye 
// "/dog" => "meow

app.get("/", function(request, respond) {
    respond.send("hi there");

});

app.get("/r/:subreditname", function(request, respond) {
    // console.log(request.params); // .params returns the subreddit name 
    var subreddit = request.params.subreditname;
    respond.send("you are on subredit page  " + subreddit.toUpperCase()); // built int function to change into upper case 

});

app.get("/r/:subreditname/comments/:id/:title/", function(request, respond) {
    console.log(request.params); // in output section u can see all the variables 
    respond.send("you are on comments page ");
}); // semicolon given before a name acts as an variable 



app.get("/bye", function(request, respond) {
    respond.send("goodbye bro");

});

app.get("/dog", function(request, respond) {
    respond.send("hello dog");

});
// this acts like an exceptional so non the get request works this will work 

app.get("*", function(request, respond) { // so star (*) working when nothing else is there like dog and bye or /etc 
    // it macthes that comes everything on the line 
    respond.send("you are a star");

});

// inside app.get the function takes two parameters they request and respond
// when u make a get request to / or home page we have to see hi there  
// to.get work there is something  called as app.listen(giving the port number,wat functionality should take place);


app.listen(3000, function() {
    console.log("server as started at 3000");
});