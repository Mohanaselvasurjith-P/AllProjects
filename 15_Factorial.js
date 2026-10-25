function factorial(n) {
    let fact = 1;

    for (let i = 1; i <= n; i++) {
        fact *= i;  // multiply fact by i
    }

    return fact;
}

// Example
let number = 5;
console.log("Factorial of " + number + " is " + factorial(number));
