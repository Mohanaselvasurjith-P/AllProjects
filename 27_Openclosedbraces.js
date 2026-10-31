let a = "{[()]}";
let frequency = {};

for (let char of a) {
    if (frequency[char]) {
        frequency[char]++;
    } else {
        frequency[char] = 1;
    }
}

console.log(frequency);

if (
    frequency["{"] === frequency["}"] &&
    frequency["["] === frequency["]"] &&
    frequency["("] === frequency[")"]
) {
    console.log("Both open and close braces are same");
} else {
    console.log("Open and close braces are not same");
}
