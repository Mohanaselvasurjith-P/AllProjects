// ==============================

// ⭐⭐⭐⭐⭐ MOST USED IN QA

// ==============================

// Original String

let str = "Hello JavaScript World";

// 1. includes() - Checks whether a string contains the specified value.
// Return type - boolean

console.log(str.includes("Java"));               // true


// 2. replace() - Replaces the first matching value with a new value.
// Return type - string

console.log(str.replace("JavaScript", "Python")); // Hello Python World


// 3. replaceAll() - Replaces all matching values with a new value.
// Return type - string

let str2 = "Java Java Java";

console.log(str2.replaceAll("Java", "Python"));   // Python Python Python


// 4. split() - Splits a string into an array using the specified separator.
// Return type - string[]

console.log(str.split(" "));                      // ["Hello", "JavaScript", "World"]


// 5. trim() - Removes whitespace from both ends of a string.
// Return type - string

let str3 = "  Hello  ";

console.log(str3.trim());                         // Hello


// trimStart() - Removes whitespace from the beginning.
// Return type - string

console.log(str3.trimStart());                    // Hello  


// trimEnd() - Removes whitespace from the end.
// Return type - string

console.log(str3.trimEnd());                      //   Hello


// 6. toUpperCase() - Converts all characters to uppercase.
// Return type - string

console.log(str.toUpperCase());                   // HELLO JAVASCRIPT WORLD


// 7. toLowerCase() - Converts all characters to lowercase.
// Return type - string

console.log(str.toLowerCase());                   // hello javascript world


// 8. indexOf() - Returns the first index of the specified value.
// Return type - number

console.log(str.indexOf("Java"));                 // 6


// 9. startsWith() - Checks whether a string starts with the specified value.
// Return type - boolean

console.log(str.startsWith("Hello"));             // true


// 10. endsWith() - Checks whether a string ends with the specified value.
// Return type - boolean

console.log(str.endsWith("World"));               // true


// 11. slice() - Extracts part of a string.
// Return type - string

console.log(str.slice(6,16));                     // JavaScript


// 12. concat() - Joins two or more strings.
// Return type - string

console.log(str.concat(" Learning"));             // Hello JavaScript World Learning


// 13. charAt() - Returns the character at the specified index.
// Return type - string

console.log(str.charAt(1));                       // e


// 14. lastIndexOf() - Returns the last index of the specified value.
// Return type - number

console.log(str.lastIndexOf("o"));                // 19


// 15. repeat() - Repeats a string the specified number of times.
// Return type - string

console.log("Hi ".repeat(3));                     // Hi Hi Hi



// ==============================

// ⭐⭐⭐ SOMETIMES USED

// ==============================


// 16. search() - Searches for a value or regular expression.
// Return type - number

console.log(str.search("Java"));                  // 6


// 17. match() - Returns the first matching result.
// Return type - RegExpMatchArray | null

console.log(str.match("Java"));                   // ["Java", index: 6, input: "Hello JavaScript World", groups: undefined]


// 18. substring() - Returns characters between two indexes.
// Return type - string

console.log(str.substring(6,16));                 // JavaScript


// 19. at() - Returns the character at the specified index.
// Return type - string | undefined

console.log(str.at(-1));                          // d


// 20. trimStart() - Removes whitespace from the beginning.
// Return type - string

console.log(str3.trimStart());                    // Hello  


// 21. trimEnd() - Removes whitespace from the end.
// Return type - string

console.log(str3.trimEnd());                      //   Hello


// 22. padStart() - Pads the beginning of a string.
// Return type - string

console.log("5".padStart(3,"0"));                 // 005


// 23. padEnd() - Pads the end of a string.
// Return type - string

console.log("5".padEnd(3,"0"));                   // 500



// ==============================

// ⭐ RARELY USED

// ==============================


// 24. charCodeAt() - Returns the Unicode value of the character.
// Return type - number

console.log(str.charCodeAt(1));                   // 101


// 25. codePointAt() - Returns the Unicode code point.
// Return type - number | undefined

console.log(str.codePointAt(1));                  // 101


// 26. matchAll() - Returns all matches of a regular expression.
// Return type - RegExpStringIterator<RegExpExecArray>

let str1 = "cat bat cat";

console.log([...str1.matchAll(/cat/g)]);


// 27. substr() - Returns characters from a start index for a given length (Deprecated).
// Return type - string

console.log(str.substr(6,10));                    // JavaScript


// 28. localeCompare() - Compares two strings.
// Return type - number

console.log("apple".localeCompare("banana"));     // -1


// 29. valueOf() - Returns the primitive value of a string object.
// Return type - string

console.log(str.valueOf());                       // Hello JavaScript World


// 30. toString() - Returns the string representation.
// Return type - string

console.log(str.toString());                      // Hello JavaScript World


// 31. normalize() - Returns the Unicode-normalized form.
// Return type - string

console.log(str.normalize());                     // Hello JavaScript World