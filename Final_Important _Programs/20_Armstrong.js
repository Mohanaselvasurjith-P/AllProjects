function isArmstrong(num) {
    let sum = 0;
    let digits = num.toString().length;
    let original = num;

    while (original > 0) {
        let digit = original % 10;
        sum += digit ** digits;
        original = Math.floor(original / 10);
    }

    return sum === num;
}

// Example
let number = 153;

if (isArmstrong(number)) {
    console.log(number + " is an Armstrong number");
} else {
    console.log(number + " is not an Armstrong number");
}

//----------------------------------------------------
//Print Armstrong numbers from 1 to 1000
//----------------------------------------------------  
for (let num = 1; num <= 1000; num++) {

    let original = num;
    let sum = 0;
    let digits = num.toString().length;

    while (original > 0) {
        let digit = original % 10;
        sum += digit ** digits;
        original = Math.floor(original / 10);
    }

    if (sum === num) {
        console.log(num);
    }
}