const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function fibonacci(num) {
    let fib = [0, 1];
    for (let i = 2; i < num; i++) {
        fib[i] = fib[i - 1] + fib[i - 2];
    }
    return fib.slice(0, num);
}

rl.question("Enter the number: ", function(input) {
    let num = Number(input);

    if (isNaN(num) || num <= 0) {
        console.log("Please enter a valid positive number");
    } else {
        console.log("First " + num + " Fibonacci numbers:");
        console.log(fibonacci(num).join(", "));
    }

    rl.close();
});