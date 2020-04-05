// const request = require('request');
// request('http://www.google.com', function(error, response, body) {
//     console.error('error:', error); // Print the error if one occurred
//     console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
//     console.log('body:', body); // Print the HTML for the Google homepage.
// });

// var request = require("request");
// request('https://www.google.com/', function(error, response, body) {
//     if (error) {
//         console.log("something went wrong");
//         console.log("error");
//     } else {
//         if (response.statusCode == 200) {
//             console.log("success");
//             console.log(body);
//         }
//     }
// });

var request = require("request");
request("", function(error, response, body) {
    if (!error && response.statusCode == 200) {
        console.log(body);
    }

});