var express = require("express"); //importing the express package
var app = express(); // passing all rhe package functionality to the app
// and for using any of the functionality app.functionality name


// route this is part which painly deals with https in and out request 
// "/" reprsents the home which here we going to get hi there 
// "/bye" => you will get good bye 
// "/dog" => "meow

app.get("/", function(request, respond) {
    res.send("hi there");

});
// when u make a get request to / or home page we have to see hi there  
// to.get work there is something  called as app.listen(giving the port number,wat functionality should take place);


app.listen(3000, function() {
    console.log("serving on demo port 3000");
})