let str = "madam";
let reversed = "";

for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
}

if (str === reversed) {
    console.log(str + " is a Palindrome");
} else {
    console.log(str + " is not a Palindrome");
}

//--------------------------------------------
//Second Method
//--------------------------------------------
function isPalindrome(str) {
  const reversed = str.split("").reverse().join("");
  return str === reversed;
}

console.log(isPalindrome("madam")); // true
console.log(isPalindrome("hello")); // false