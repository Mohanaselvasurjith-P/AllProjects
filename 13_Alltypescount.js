let str = "surJIth%$%%$ 124234 PRAdeep";

let alphabets = 0;
let specialCharacters = 0;
let numbers = 0;
let spaces = 0;

for(let i = 0; i < str.length; i++) {
    if(/[a-zA-Z]/.test(str[i])) {
        alphabets++;
    } else if(/[0-9]/.test(str[i])) {
        numbers++;
    } else if(str[i] === ' ') {
        spaces++;
    } else {
        specialCharacters++;
    }
}

console.log("Alphabets: " + alphabets);
console.log("Numbers: " + numbers);
console.log("Spaces: " + spaces);
console.log("Special Characters: " + specialCharacters);
