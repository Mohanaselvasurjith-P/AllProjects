let x = 'Hello world';

let words = x.trim().split(' ');//we can use with out trim also same result will come but trim is used to remove the extra space at the beginning and end of the string.
console.log(words);//['Hello', 'world']
let lastWord = words[words.length - 1];

console.log(lastWord.length);


// Line-by-line explanation
// 1. x.trim() — removes whitespace at the beginning and end.
// 2. .split(' ') — splits the string into an array of words: ['Hello', 'world'].
// 3. words[words.length - 1] — gets the last word, 'world'.
// 4. lastWord.length — returns the number of characters in the last word, which is 5.