const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function factorial(num) {
    let fact = 1;
    for (let i = 1; i <= num; i++) {
        fact *= i;
        //fact = fact * i; // alternative way to calculate factorial
    }
    return fact;
}

rl.question("Enter a number: ", function(input) {
    let num = Number(input);

    if (isNaN(num) || num < 0) {
        console.log("Please enter a valid non-negative number");
    } else {
        console.log("Factorial of " + num + " is " + factorial(num));
    }

    rl.close();
});