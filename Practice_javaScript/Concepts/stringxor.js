// ==========================================
// JAVASCRIPT STRING METHODS
// ==========================================
// Original String
let text = "Automation";

// 1. length
// Definition: Returns the number of characters in a string.
// Return Type: Number

console.log(text.length);// 10

// 2. toUpperCase()
// Definition: Converts all characters in a string to uppercase.
// Return Type: String

console.log(text.toUpperCase());// AUTOMATION

// 3. toLowerCase()
// Definition: Converts all characters in a string to lowercase.
// Return Type: String

console.log(text.toLowerCase());// automation

// 4. includes()
// Definition: Checks whether a string contains a specified value.
// Return Type: Boolean

console.log(text.includes("Auto"));// true
console.log(text.includes("auto"));// false

// 5. startsWith()
// Definition: Checks whether a string starts with a specified value.
// Return Type: Boolean

console.log(text.startsWith("Auto"));// true

// 6. endsWith()
// Definition: Checks whether a string ends with a specified value.
// Return Type: Boolean

console.log(text.endsWith("tion"));// true

// 7. trim()
// Definition: Removes whitespace from both ends of a string.
// Return Type: String

let value = "   Login Test   ";
console.log(value.trim());// Login Test

// 8. trimStart()
// Definition: Removes whitespace from the beginning of a string.
// Return Type: String

console.log(value.trimStart());// Login Test

// 9. trimEnd()
// Definition: Removes whitespace from the end of a string.
// Return Type: String

console.log(value.trimEnd());//    Login Test

// 10. split()
// Definition: Splits a string into an array based on a specified separator.
// Return Type: Array

let name = "John Doe";

console.log(name.split(" "))// ["John", "Doe"]

// 11. replace()
// Definition: Replaces the first occurrence of a specified value.
// Return Type: String

let message = "Login failed";
console.log(message.replace("failed", "successful"));// Login successful


// 12. replaceAll()
// Definition: Replaces all occurrences of a specified value.
// Return Type: String

let data = "QA QA QA";

console.log(data.replaceAll("QA", "SDET"));// SDET SDET SDET

// 13. charAt()
// Definition: Returns the character at a specified index.
// Return Type: String

let word = "Testing";

console.log(word.charAt(0));// T

// 14. charCodeAt()
// Definition: Returns the Unicode value of the character at a specified index.
// Return Type: Number

console.log(word.charCodeAt(0));// 84

// 15. indexOf()
// Definition: Returns the index of the first occurrence of a specified value.
// Return Type: Number

console.log(word.indexOf("t"));// 1

// 16. lastIndexOf()
// Definition: Returns the index of the last occurrence of a specified value.
// Return Type: Number

let test = "test automation test";

console.log(test.lastIndexOf("test"));// 17

// 17. substring()
// Definition: Extracts characters between two specified indexes.
// Return Type: String

let str = "JavaScript";

console.log(str.substring(0, 4));// Java

// 18. slice()
// Definition: Extracts a section of a string and returns it as a new string.
// Return Type: String

console.log(str.slice(0, 4));// Java

// 19. concat()
// Definition: Joins two or more strings together.
// Return Type: String

let firstName = "John";
let lastName = "Doe";

console.log(firstName.concat(" ", lastName));// John Doe

// 20. repeat()
// Definition: Repeats a string a specified number of times.
// Return Type: String

console.log("QA ".repeat(3));// QA QA QA

// 21. padStart()
// Definition: Adds characters to the beginning of a string until it reaches a specified length.
// Return Type: String

let id = "123";
console.log(id.padStart(6, "0"));// 000123

// 22. padEnd()
// Definition: Adds characters to the end of a string until it reaches a specified length.
// Return Type: String

console.log(id.padEnd(6, "0"));// 123000

// 23. at()
// Definition: Returns the character at a specified index, supporting negative indexes.
// Return Type: String

let language = "JavaScript";
console.log(language.at(0));// J
console.log(language.at(-1));// t

// 24. match()
// Definition: Searches a string using a regular expression and returns the matching results.
// Return Type: Array or null

let email = "test@gmail.com";
console.log(email.match(/gmail/));// ["gmail"]

// 25. matchAll()
// Definition: Returns an iterator containing all matches of a regular expression.
// Return Type: RegExp String Iterator

let numbers = "Test123 QA456";
console.log([...numbers.matchAll(/\d+/g)]);
// 123
// 456

// 26. search()
// Definition: Searches for a specified value or regular expression and returns its index.
// Return Type: Number

let browser = "Chrome Browser";
console.log(browser.search("Browser"));// 7

// 27. localeCompare()
// Definition: Compares two strings according to the current locale.
// Return Type: Number

console.log("apple".localeCompare("banana"));// -1

// 28. toString()
// Definition: Converts a value into its string representation.
// Return Type: String

let number = 123;
console.log(number.toString());// "123"

// 29. String()
// Definition: Converts a value into a string.
// Return Type: String

let value2 = 100;
console.log(String(value2));// "100"

// 30. String.raw()
// Definition: Returns a string with escape sequences treated as raw text.
// Return Type: String

console.log(String.raw`Hello\nWorld`);// Hello\nWorld

// ==========================================
// VERY IMPORTANT QA STRING PROGRAMS
// ==========================================

// 31. Check if string contains a value
// Definition: Checks whether a string contains a specific value.
// Return Type: Boolean

let username = "testuser123";
console.log(username.includes("user"));// true

// 32. Check empty string
// Definition: Checks whether a string has zero characters.
// Return Type: Boolean

let input = "";
console.log(input.length === 0);// true

// 33. Remove spaces
// Definition: Removes leading and trailing spaces from a string.
// Return Type: String

let testData = "  Selenium Automation  ";
console.log(testData.trim());// Selenium Automation

// 34. Reverse String
// Definition: Reverses the order of characters in a string.
// Return Type: String

let reverse = "QA";
console.log(reverse.split("").reverse().join(""));// AQ

// 35. Count Characters
// Definition: Counts how many times each character occurs in a string.
// Return Type: Object

let chars = "testing";
let count = {};

for (const char of chars) {
    count[char] = (count[char] || 0) + 1;
}

console.log(count);
// { t: 2, e: 1, s: 2, i: 1, n: 1, g: 1 }


// 36. Remove Spaces
// Definition: Removes all spaces from a string.
// Return Type: String

let testString = "Java Script Automation";
console.log(testString.replaceAll(" ", ""));// JavaScriptAutomation

// 37. Convert String to Array
// Definition: Converts a string into an array using a separator.
// Return Type: Array

let browsers = "Chrome,Firefox,Edge";
console.log(browsers.split(","));// ["Chrome", "Firefox", "Edge"]

// 38. Convert Array to String
// Definition: Joins array elements into a single string.
// Return Type: String

let tools = ["Selenium", "Playwright", "Cypress"];
console.log(tools.join(","));// Selenium,Playwright,Cypress

// 39. Check Palindrome
// Definition: Checks whether a string reads the same forward and backward.
// Return Type: Boolean

function isPalindrome(str) {
    return str === str.split("").reverse().join("");
}

console.log(isPalindrome("madam"));// true

// 40. First Character
// Definition: Returns the first character of a string.
// Return Type: String

let testName = "Automation";
console.log(testName.charAt(0));// A

// 41. Last Character
// Definition: Returns the last character of a string.
// Return Type: String

console.log(testName.charAt(testName.length - 1));// n
//---------------------------------------------------------------------------------


