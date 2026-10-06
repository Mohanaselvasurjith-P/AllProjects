let a = 5;
let b = 10;

console.log("Before Swap: a = " + a + ", b = " + b);

// Using a temporary variable
let temp = a;
a = b;
b = temp;

console.log("After Swap: a = " + a + ", b = " + b);

//Alternative method (without temp)
let c = 34;
let d = 76;
[c, d] = [d, c];
console.log("After Swap (without temp): c = " + c + ", d = " + d);