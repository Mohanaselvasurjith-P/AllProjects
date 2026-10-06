// ==========================================
// JAVASCRIPT ARRAY METHODS
// ==========================================

// 1. length
// Definition: Returns the number of elements in an array.
// Return Type: Number

let numbers = [10, 20, 30, 40];
console.log(numbers.length);// 4

// 2. push()
// Definition: Adds one or more elements to the end of an array.
// Return Type: Number (new array length)

numbers.push(50);
console.log(numbers);// [10, 20, 30, 40, 50]

// 3. pop()
// Definition: Removes and returns the last element from an array.
// Return Type: Any (removed element) or undefined

numbers.pop();
console.log(numbers);// [10, 20, 30, 40]

// 4. unshift()
// Definition: Adds one or more elements to the beginning of an array.
// Return Type: Number (new array length)

numbers.unshift(5);
console.log(numbers);// [5, 10, 20, 30, 40]

// 5. shift()
// Definition: Removes and returns the first element from an array.
// Return Type: Any (removed element) or undefined

numbers.shift();
console.log(numbers);// [10, 20, 30, 40]

// 6. includes()
// Definition: Checks whether an array contains a specified element.
// Return Type: Boolean

console.log(numbers.includes(20));// true
console.log(numbers.includes(100));// false

// 7. indexOf()
// Definition: Returns the index of the first occurrence of an element.
// Return Type: Number

console.log(numbers.indexOf(30));// 2

// 8. lastIndexOf()
// Definition: Returns the index of the last occurrence of an element.
// Return Type: Number

let values = [10, 20, 10, 30, 10];
console.log(values.lastIndexOf(10));// 4

// 9. forEach()
// Definition: Executes a function once for each element in an array.
// Return Type: undefined

numbers.forEach(num => {
    console.log(num);
});

// 10. map()
// Definition: Creates a new array by transforming every element.
// Return Type: Array

let doubled = numbers.map(num => num * 2);
console.log(doubled);// [20, 40, 60, 80]

// 11. filter()
// Definition: Creates a new array containing elements that satisfy a condition.
// Return Type: Array

let evenNumbers = numbers.filter(num => num % 2 === 0);
console.log(evenNumbers);// [10, 20, 30, 40]

// 12. find()
// Definition: Returns the first element that satisfies a condition.
// Return Type: Element value or undefined

let result = numbers.find(num => num > 20);
console.log(result);// 30

// 13. findIndex()
// Definition: Returns the index of the first element that satisfies a condition.
// Return Type: Number

let resultIndex = numbers.findIndex(num => num > 20);
console.log(resultIndex);// 2

// 14. some()
// Definition: Checks whether at least one element satisfies a condition.
// Return Type: Boolean

console.log(numbers.some(num => num > 30));// true

// 15. every()
// Definition: Checks whether all elements satisfy a condition.
// Return Type: Boolean

console.log(numbers.every(num => num > 0));// true

// 16. reduce()
// Definition: Reduces all array elements into a single value.
// Return Type: Any (depends on accumulator)

let sum = numbers.reduce((total, num) => total + num, 0);
console.log(sum);// 100

// 17. sort()
// Definition: Sorts the elements of an array in place.
// Return Type: Array

let unsorted = [40, 10, 30, 20];
unsorted.sort((a, b) => a - b);
console.log(unsorted);// [10, 20, 30, 40]

// 18. reverse()
// Definition: Reverses the order of elements in an array in place.
// Return Type: Array

let arr = [1, 2, 3, 4];
arr.reverse();
console.log(arr);// [4, 3, 2, 1]

// 19. slice()-Start index is included, but end index is excluded.
// Definition: Returns a shallow copy of a portion of an array.
// Return Type: Array
// Does NOT modify original array

let data = [10, 20, 30, 40, 50];
console.log(data.slice(1, 4));// [20, 30, 40]

// 20. splice()
// Definition: Adds, removes, or replaces elements in an array.
// Return Type: Array (removed elements)
// MODIFIES original array

let items = [10, 20, 30, 40];
items.splice(1, 2);//remove values
items.splice(4, 0, 50);//add values
items.splice(1, 2, 100, 200);//replace values
console.log(items);// [10, 40]

// ==========================================
// FREQUENTLY USED ARRAY METHODS
// ==========================================

// 21. concat()
// Definition: Combines two or more arrays into a new array.
// Return Type: Array

let arr1 = [1, 2];
let arr2 = [3, 4];

let combined = arr1.concat(arr2);
console.log(combined);// [1, 2, 3, 4]

// 22. join()
// Definition: Converts array elements into a single string using a separator.
// Return Type: String

let browsers = ["Chrome", "Firefox", "Edge"];
console.log(browsers.join(","));// Chrome,Firefox,Edge


// 23. flat()
// Definition: Creates a new array by flattening nested arrays.
// Return Type: Array

let nested = [1, [2, 3], [4, 5]];
console.log(nested.flat());// [1, 2, 3, 4, 5]

// 24. flatMap()
// Definition: Maps each element and then flattens the result by one level.
// Return Type: Array

let users = [1, 2, 3];
console.log(users.flatMap(num => [num, num * 2]));// [1, 2, 2, 4, 3, 6]

// 25. Array.isArray()
// Definition: Checks whether a value is an array.
// Return Type: Boolean

console.log(Array.isArray([1, 2, 3]));// true
console.log(Array.isArray("Hello"));// false

// 26. at()
// Definition: Returns the element at a specified index, including negative indexes.
// Return Type: Element value or undefined

let tools = ["Selenium", "Playwright", "Cypress"];
console.log(tools.at(0));// Selenium
console.log(tools.at(-1));// Cypress

// 27. findLast()
// Definition: Returns the last element that satisfies a condition.
// Return Type: Element value or undefined

let nums = [10, 20, 30, 40, 50];
console.log(nums.findLast(num => num > 25));// 50

// 28. findLastIndex()
// Definition: Returns the index of the last element that satisfies a condition.
// Return Type: Number

console.log(nums.findLastIndex(num => num > 25));// 4

// 29. toString() - Converts an array to a comma-separated string.
// Return type - string
console.log(numbers.toString()); // 10,20,30,40

// ==========================================
// IMPORTANT QA ARRAY PROGRAMS
// ==========================================

// 29. Remove Duplicates
// Definition: Removes duplicate values from an array.
// Return Type: Array

let duplicateData = [1, 2, 2, 3, 3, 4];
let uniqueData = [...new Set(duplicateData)];//Spread operator

console.log(uniqueData);// [1, 2, 3, 4]

// 30. Find Duplicates
// Definition: Finds values that occur more than once in an array.
// Return Type: Array

let testData = [1, 2, 3, 2, 4, 3, 5];

let seen = new Set();
let duplicates = new Set();

for (const value of testData) {
    if (seen.has(value)) {
        duplicates.add(value);
    }

    seen.add(value);
}

console.log([...duplicates]);// [2, 3]

// 31. Find Largest Number
// Definition: Finds the largest number in an array.
// Return Type: Number

let numbers2 = [10, 50, 20, 80, 30];
console.log(Math.max(...numbers2));// 80

// 32. Find Smallest Number
// Definition: Finds the smallest number in an array.
// Return Type: Number

console.log(Math.min(...numbers2));// 10

// 33. Find Second Largest
// Definition: Finds the second-largest unique number in an array.
// Return Type: Number

let numbers3 = [10, 50, 20, 80, 30, 80];

let uniqueNumbers = [...new Set(numbers3)];

uniqueNumbers.sort((a, b) => b - a);

console.log(uniqueNumbers[1]);// 50

// 34. Sum of Array
// Definition: Calculates the sum of all numbers in an array.
// Return Type: Number

let numbers4 = [10, 20, 30];
let total = numbers4.reduce((sum, num) => sum + num, 0);
console.log(total);// 60


// 35. Find Even Numbers
// Definition: Finds all even numbers from an array.
// Return Type: Array

let numbers5 = [1, 2, 3, 4, 5, 6];
let even = numbers5.filter(num => num % 2 === 0);
console.log(even);// [2, 4, 6]

// 36. Find Odd Numbers
// Definition: Finds all odd numbers from an array.
// Return Type: Array

let odd = numbers5.filter(num => num % 2 !== 0);
console.log(odd);// [1, 3, 5]

// 37. Reverse Array
// Definition: Creates a reversed copy of an array without modifying the original.
// Return Type: Array

let numbers6 = [1, 2, 3, 4, 5];
console.log([...numbers6].reverse());// [5, 4, 3, 2, 1]

// 38. Find Common Elements
// Definition: Finds elements that exist in both arrays.
// Return Type: Array

let first = [1, 2, 3, 4];
let second = [3, 4, 5, 6];

let common = first.filter(num => second.includes(num));

console.log(common);// [3, 4]

// 39. Merge Arrays
// Definition: Combines elements from multiple arrays into one array.
// Return Type: Array

let a = [1, 2, 3];
let b = [4, 5, 6];

let merged = [...a, ...b];

console.log(merged);// [1, 2, 3, 4, 5, 6]

// 40. Convert String to Array
// Definition: Converts a string into an array using a specified separator.
// Return Type: Array

let browserString = "Chrome,Firefox,Edge";

let browserArray = browserString.split(",");

console.log(browserArray);// ["Chrome", "Firefox", "Edge"]

// ==========================================
// VERY IMPORTANT INTERVIEW DIFFERENCES
// ==========================================

// map()    -> transforms every element
// filter() -> returns matching elements
// find()   -> returns first matching element
// some()   -> returns true if ANY match
// every()  -> returns true if ALL match
// reduce() -> converts array into one value
// forEach() -> loops through array


// slice()  -> does NOT modify original array
// splice() -> DOES modify original array


// push()   -> adds at END
// pop()    -> removes from END
// unshift() -> adds at BEGINNING
// shift()   -> removes from BEGINNING