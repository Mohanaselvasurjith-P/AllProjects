function removeDuplicates(arr) {
    return [...new Set(arr)];
}

// Example
let array = [1, 2, 3, 2, 4, 5, 1, 6, 3];
console.log("Original Array: " + array);
console.log("Array without duplicates: " + removeDuplicates(array));

//--------------------------------------------
//Another Method
//--------------------------------------------
let arr = [1, 2, 2, 3, 4, 4, 5];
let result = [];

for (let num of arr) {
    if (!result.includes(num)) {
        result.push(num);
    }
}

console.log(result);



// Current num	Is it already in result?	    Result
// 1	        No	                            [1]
// 2	        No	                            [1, 2]
// 2	        Yes	                            [1, 2]
// 3	        No	                            [1, 2, 3]
// 4	        No	                            [1, 2, 3, 4]
// 4	        Yes	                            [1, 2, 3, 4]
// 5	        No	                            [1, 2, 3, 4, 5]

// result.includes(num) returns true if the value already exists.
// ! reverses the result.
// Therefore, result.push(num) executes only for a new value.                                                                