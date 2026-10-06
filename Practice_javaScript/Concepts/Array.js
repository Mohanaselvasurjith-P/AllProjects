// ==============================
// ⭐⭐⭐⭐⭐ MOST USED IN QA
// ==============================
// Original Array
let arr = [10,20,30,40];

// 1. push() - Adds one or more elements to the end of an array.
// Return type - number
arr.push(50);
console.log(arr); // [10,20,30,40,50]

// 2. pop() - Removes and returns the last element of an array.
// Return type - number | undefined
arr = [10,20,30,40];
console.log(arr.pop()); // 40
console.log(arr); // [10,20,30]

// 3. shift() - Removes and returns the first element of an array.
// Return type - number | undefined
arr = [10,20,30,40];
console.log(arr.shift()); // 10
console.log(arr); // [20,30,40]

// 4. unshift() - Adds one or more elements to the beginning of an array.
// Return type - number
arr = [10,20,30,40];
arr.unshift(5);
console.log(arr); // [5,10,20,30,40]

// 5. length - Returns the number of elements in an array.
// Return type - number
console.log(arr.length); // 5

// 6. includes() - Checks whether an array contains the specified element.
// Return type - boolean
arr = [10,20,30,40];
console.log(arr.includes(20)); // true

// 7. indexOf() - Returns the first index of the specified element.
// Return type - number
console.log(arr.indexOf(30)); // 2

// 8. slice() - Returns a portion of an array without modifying the original.
// Return type - number[]
console.log(arr.slice(1,3)); // [20,30]

// 9. splice() - Adds, removes, or replaces elements in an array.
// Return type - number[]
// array.splice(startIndex, deleteCount, item1, item2, ...)
let a = [10,20,30,40];
console.log(a.splice(1,2)); // [20,30]
console.log(a.splice(1,2,25,35)); // [10,25,35,40] -> removed elements
console.log(a); // [10,25,35,40]

// 10. concat() - Combines two or more arrays into a new array.
// Return type - number[]
arr = [10,20,30,40];
console.log(arr.concat([50,60])); // [10,20,30,40,50,60]

// 11. join() - Joins all array elements into a string.
// Return type - string
console.log(arr.join("-")); // 10-20-30-40

// 12. filter() - Returns a new array containing elements that satisfy a condition.
// Return type - number[]
console.log(arr.filter(num => num > 20)); // [30,40]

// Example
let fruits = ["Apple", "Kiwi", "Banana", "Mango"];
// Return type - string[]
console.log(fruits.filter(fruit => fruit.startsWith("A"))); // ["Apple"]

// 13. map() - Creates a new array by transforming each element.
// Return type - number[]
console.log(arr.map(num => num * 2)); // [20,40,60,80]

// 14. forEach() - Executes a function for each array element.
// Return type - void
arr.forEach(num => console.log(num)); // 10 20 30 40

// 15. find() - Returns the first element that satisfies a condition.
// Return type - number | undefined
console.log(arr.find(num => num > 20)); // 30

// 16. findIndex() - Returns the index of the first element that satisfies a condition.
// Return type - number
console.log(arr.findIndex(num => num > 20)); // 2

// 17. every() - Checks if all elements satisfy a condition.
// Return type - boolean
console.log(arr.every(num => num > 5)); // true

// 18. some() - Checks if at least one element satisfies a condition.
// Return type - boolean
console.log(arr.some(num => num > 35)); // true

// 19. reduce() - Reduces the array to a single value.
// Return type - depends on the accumulator/result type
console.log(arr.reduce((sum,num) => sum + num, 0)); // 100

// 20. Array.isArray() - Checks whether a value is an array.
// Return type - boolean
console.log(Array.isArray(arr)); // true


// ==============================
// ⭐⭐⭐ SOMETIMES USED
// ==============================

// 21. at() - Returns the element at the specified index.
// Return type - number | undefined
console.log(arr.at(-1)); // 40

// 22. lastIndexOf() - Returns the last index of the specified element.
// Return type - number
arr = [10,20,30,10];
console.log(arr.lastIndexOf(10)); // 3

// 23. sort() - Sorts the elements of an array.
// Return type - number[] (same array, after sorting)
arr = [40,10,30,20];
console.log(arr.sort((a,b) => a-b)); // [10,20,30,40]

// 24. reverse() - Reverses the order of array elements.
// Return type - number[] (same array, after reversing)
arr = [10,20,30,40];
console.log(arr.reverse()); // [40,30,20,10]

// 25. flat() - Flattens nested arrays.
// Return type - number[]
let nested = [1,[2,[3,4]]];
console.log(nested.flat(2)); // [1,2,3,4]

// 26. flatMap() - Maps and flattens by one level.
// Return type - number[]
arr = [1,2,3];
console.log(arr.flatMap(x => [x,x*2])); // [1,2,2,4,3,6]

// 27. fill() - Replaces elements with a specified value.
// Return type - number[] (same array, after filling)
arr = [10,20,30,40];
console.log(arr.fill(0)); // [0,0,0,0]

// 28. Array.from() - Creates an array from an iterable.
// Return type - string[]
console.log(Array.from("Hello")); // ["H","e","l","l","o"]

// 29. Array.of() - Creates an array from given arguments.
// Return type - number[]
console.log(Array.of(10,20,30)); // [10,20,30]


// ==============================
// ⭐ RARELY USED
// ==============================

// 30. reduceRight() - Reduces the array from right to left.
// Return type - depends on the accumulator/result type
let letters = ["a","b","c"];
console.log(letters.reduceRight((a,b) => a+b)); // cba

// 31. findLast() - Returns the last matching element.
// Return type - number | undefined
arr = [10,20,30,20];
console.log(arr.findLast(num => num == 20)); // 20

// 32. findLastIndex() - Returns the last matching index.
// Return type - number
console.log(arr.findLastIndex(num => num == 20)); // 3

// 33. copyWithin() - Copies array elements within the same array.
// Return type - number[] (same array, after copying)
arr = [10,20,30,40];
console.log(arr.copyWithin(1,2)); // [10,30,40,40]

// 34. entries() - Returns an iterator of index-value pairs.
// Return type - ArrayIterator<[number, number]>
arr = [10,20,30];
console.log([...arr.entries()]); // [[0,10],[1,20],[2,30]]

// 35. keys() - Returns an iterator of indexes.
// Return type - ArrayIterator<number>
console.log([...arr.keys()]); // [0,1,2]

// 36. values() - Returns an iterator of values.
// Return type - ArrayIterator<number>
console.log([...arr.values()]); // [10,20,30]

// 37. toString() - Converts an array to a comma-separated string.
// Return type - string
console.log(arr.toString()); // 10,20,30

// 38. toLocaleString() - Converts elements into a locale-specific string.
// Return type - string
arr = [1000,2000,3000];
console.log(arr.toLocaleString()); // 1,000,2,000,3,000