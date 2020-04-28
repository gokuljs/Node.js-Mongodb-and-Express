function average(scores) {

    var sum = 0; // intailizing the sum
    scores.forEach(function(score) { // using for each loop

        sum = sum + score;
    })
    var avg = sum / scores.length; //taking average
    round = Math.round(avg) // built in function to round of a number
    console.log(round);
}

var scores = [90, 98, 89, 100, 100, 86, 94];
average(scores); // calling the function