
let text = "aabbbcccc";
let frequency = {};
let maxCount = 0;
let maxChar = "";

for (let char of text) {
    frequency[char] = (frequency[char] || 0) + 1;

    if (frequency[char] > maxCount) {
        maxCount = frequency[char];
        maxChar = char;
    }
}

console.log(maxChar);
