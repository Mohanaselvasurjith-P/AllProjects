//Two-Pointer Approach
let str = "programming";
let arr = str.split("");

let left = 0;
let right = arr.length - 1;

function isVowel(char) {
    return "aeiou".includes(char);
}

while (left < right) {

    // Move left pointer until it finds a vowel
    while (left < right && !isVowel(arr[left])) {
        left++;
    }

    // Move right pointer until it finds a vowel
    while (left < right && !isVowel(arr[right])) {
        right--;
    }

    // Swap the vowels
    let temp = arr[left];
    arr[left] = arr[right];
    arr[right] = temp;

    left++;
    right--;
}

console.log(arr.join(""));
//-------------------------------------------------------------
//Using filter() and pop()
let str1 = "programming";

let vowels = str1.split("").filter(char => "aeiou".includes(char));

let result = "";

for (let char of str1) {
    if ("aeiou".includes(char)) {
        result += vowels.pop();
    } else {
        result += char;
    }
}

console.log(result);
