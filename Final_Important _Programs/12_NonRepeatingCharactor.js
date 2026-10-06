function firstNonRepeatingChar(str) {
    let charCount = {};

    // Count each character
    for (let char of str) {
        charCount[char] = (charCount[char] || 0) + 1;
    }

    // Find first character with count 1
    for (let char of str) {
        if (charCount[char] === 1) {
            return char;
        }
    }

    return null; // if no non-repeating character
}

// Example
let input = "swiss";
let result = firstNonRepeatingChar(input);

if (result) {
    console.log("First non-repeating character: " + result);
} else {
    console.log("No non-repeating character found");
}