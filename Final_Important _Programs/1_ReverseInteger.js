let x = 12345;
let reverse = 0;//54321 - integer
//let reverse = '';//"54321" - string

while (x > 0) {
    let digit = x % 10;
    reverse = reverse * 10 + digit;
    x = Math.floor(x / 10);
}

console.log(reverse);


//------------------------------------------------------
let num = 25968;

let stringnum = num.toString();
console.log(typeof(stringnum));//string
console.log(stringnum);//25968

let reversednum = Number(stringnum.split("").reverse().join(""));

console.log(reversednum);//86952
console.log(typeof(reversednum));//number
//--------------------------------------------------------

// Line-by-line explanation
// 1. let x = 12345; — original number.
// 2. let reverse = 0; — stores the reversed number.
// 3. x % 10 — extracts the last digit.
// 4. reverse * 10 + digit — appends that digit to the reversed number.
// 5. Math.floor(x / 10) — removes the last digit.
// 6. while (x > 0) — repeats until all digits are processed.


// Let's calculate each iteration in detail:
// Iteration	                    digit = x % 10	                    reverse * 10 + digit	                    x = Math.floor(x / 10)
// 1	                            12345 % 10 = 5	                    0 * 10 + 5 = 5	                            1234
// 2                                1234 % 10 = 4	                    5 * 10 + 4 = 54	                            123
// 3                                123 % 10 = 3	                    54 * 10 + 3 = 543	                        12
// 4                                12 % 10 = 2	                        543 * 10 + 2 = 5432	                        1
// 5                                1 % 10 = 1	                        5432 * 10 + 1 = 54321	                    0



// Feature	                                        Number approach	                                            String approach
// Initial value	                                0	                                                        ''
// Main operation	                                reverse * 10 + digit	                                    reverse + digit
// Result	                                        54321	                                                    "54321"
// Data type	                                    number	                                                    string
// Arithmetic	                                    Directly supported	                                        Usually requires conversion
// Example + 10	                                    54331	                                                    "5432110"


// String — ''
// One piece of text, built character by character.
// Example: let reverse = ''; → "olleh"

// Array — []
// An ordered collection of values.
// Example: let result = []; → [2, 4, 6]

// Number — 0
// A numeric starting value for calculations.
// Example: let total = 0; → 60

// Object — {}
// A collection of key-value pairs.
// Example: let frequency = {}; → {a: 2, b: 3}