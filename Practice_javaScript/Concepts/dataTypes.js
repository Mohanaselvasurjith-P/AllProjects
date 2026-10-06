// 1. String
let nam = "John";
console.log(nam);
console.log(typeof nam); // string


// 2. Number
let age = 30;
let salary = 50000.50;
console.log(typeof age);    // number
console.log(typeof salary); // number


// 3. Boolean
let isActive = true;
let isLoggedIn = false;

console.log(typeof isActive);   // boolean
console.log(typeof isLoggedIn); // boolean


// 4. Undefined
let valu;

console.log(valu);        // undefined
console.log(typeof valu); // undefined


// 5. Null
let data = null;

console.log(data);        // null
console.log(typeof data); // object


// 6. BigInt
let bigNumber = 12345678901234567890n;

console.log(bigNumber);
console.log(typeof bigNumber); // bigint


// 7. Symbol
let id = Symbol("id");

console.log(id);
console.log(typeof id); // symbol


// 8. Object
let employee = {
    name: "John",
    age: 30,
    department: "QA"
};

console.log(employee);
console.log(typeof employee); // object


// 9. Array
let numbers = [10, 20, 30, 40];

console.log(numbers);
console.log(typeof numbers); // object

console.log(Array.isArray(numbers)); // true


// 10. Function
function login() {
    console.log("Login successful");
}

console.log(typeof login); // function


// 11. typeof
console.log(typeof "Hello");       // string
console.log(typeof 100);           // number
console.log(typeof true);          // boolean
console.log(typeof undefined);     // undefined
console.log(typeof null);          // object
console.log(typeof 123n);          // bigint
console.log(typeof Symbol("x"));   // symbol
console.log(typeof {});            // object
console.log(typeof []);            // object
console.log(typeof function() {}); // function


// 12. String to Number
let strNumber = "100";

let convertedNumber = Number(strNumber);

console.log(convertedNumber);        // 100
console.log(typeof convertedNumber); // number


// 13. Number to String
let number = 100;

let convertedString = String(number);

console.log(convertedString);        // 100
console.log(typeof convertedString); // string


// 14. String to Boolean
console.log(Boolean("hello")); // true
console.log(Boolean(""));      // false


// 15. Number to Boolean
console.log(Boolean(1)); // true
console.log(Boolean(0)); // false


// 16. Truthy and Falsy
console.log(Boolean(false));     // false
console.log(Boolean(0));         // false
console.log(Boolean(""));        // false
console.log(Boolean(null));      // false
console.log(Boolean(undefined)); // false
console.log(Boolean(NaN));       // false

console.log(Boolean("Hello")); // true
console.log(Boolean(100));     // true
console.log(Boolean([]));      // true
console.log(Boolean({}));      // true


// 17. NaN
let result = "hello";

console.log(result);        // hello
console.log(typeof result); // string
console.log(Number.isNaN(result)); // flase



// 18. Object Reference
let user1 = {
    name: "John"
};

let user2 = user1;

user2.name = "David";

console.log(user1.name); // David
console.log(user2.name); // David


// 19. Primitive Copy
let a = 10;
let b = a;

b = 20;

console.log(a); // 10
console.log(b); // 20


// 20. const Object
const user = {
    name: "John"
};

user.name = "David";

console.log(user.name); // David


// 21. Check Array
let arr = [1, 2, 3];

console.log(Array.isArray(arr)); // true


// 22. Check Object
let obj = {
    name: "John"
};

console.log(typeof obj); // object


// 23. Check Null
let testValue = null;

console.log(testValue === null); // true


// 24. Check Undefined
let test;

console.log(test === undefined); // true


// 25. Type Conversion
let value1 = "10";
let value2 = 5;

console.log(Number(value1) + value2); // 15


// 26. String Concatenation
let firstName = "John";
let lastName = "David";

console.log(firstName + " " + lastName);
// John David


// 27. Template Literal
let userName = "John";
let userAge = 30;

console.log(`Name: ${userName}, Age: ${userAge}`);
// Name: John, Age: 30


// 28. Parse Integer
let value = "100px";

console.log(parseInt(value)); // 100


// 29. Parse Float
let price = "99.50";

console.log(parseFloat(price)); // 99.5