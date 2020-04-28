var request = require("request");
request("https://weather-ydn-yql.media.yahoo.com/forecastrss?location=sunnyvale,ca&format=json", function(error, response, body) {
    console.log(response.statusCode)
});