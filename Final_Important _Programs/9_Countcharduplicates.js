//-------------------------------------------------------------------------------
//Print dupilicate characters from a string
//-------------------------------------------------------------------------------

let str = 'programming';
let count = {};

for (let char of str) {
    count[char] = (count[char] || 0) + 1;
}
        console.log(count);//{ p: 1, r: 2, o: 1, g: 2, a: 1, m: 2, i: 1, n: 1 }
for (let char in count) {
    if (count[char] > 1) {
        console.log(char);//rgm
    }
}

//-------------------------------------------------------------------------------
//Print unique characters from a string
//-------------------------------------------------------------------------------
let str1 = "programming";
let result = "";

for (const ch of str1) {
    if (!result.includes(ch)) {
        result += ch;
    }
}

console.log(result);//progamin

//-------------------------------------------------------------------------------
//second approach-Print unique characters from a string
//-------------------------------------------------------------------------------
let str2 = "programming";

let result1 = [...new Set(str2)].join("");

console.log(result1);//progamin



// How it works:
// - new Set(str) keeps only unique characters.
// - [...new Set(str)] converts the Set into an array.
// - .join("") combines the characters into a string.