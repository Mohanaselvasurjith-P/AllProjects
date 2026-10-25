function isPrime(num) {
    if (num <= 1) 
        return false;

    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

// Example
let number = 7;

if (isPrime(number)) {
    console.log(number + " is a Prime number");
} else {
    console.log(number + " is not a Prime number");
}



//----------------------------------------------------
//Print prime numbers from 1 to 100
//----------------------------------------------------
for (let num = 2; num <= 100; num++) {

    let isPrime = true;

    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            isPrime = false;
            break;
        }
    }

    if (isPrime) {
        console.log(num);
    }
}