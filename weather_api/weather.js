var request = require("request");
request("https://jsonplaceholder.typicode.com/users/1", function(error, response, body) {

    if (!error && response.statusCode == 200) {
        var parsedata = JSON.parse(body);
        console.log(parsedata.name + "lives in " + parsedata.address.city);
    }
});