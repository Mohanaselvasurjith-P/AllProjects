let str1 = "Hello World";
let count1 = {};

for (let i = 0; i < str1.length; i++) {
    let char = str1[i];

    if (char === " ") {
        continue;
    }

    count1[char] = (count1[char] || 0) + 1;
}

console.log(count1);

//------------------------------------------------------------
// Alternative approach using a for loop
//------------------------------------------------------------

let str = "Mohanaselvasurjith";
let count = {};

for (let i = 0; i < str.length; i++) {
    let char = str[i];

    if (count[char]) {
        count[char]++;
    } else {
        count[char] = 1;
    }
}

console.log(count);