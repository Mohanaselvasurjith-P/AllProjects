function removeDuplicates(arr) {
    return [...new Set(arr)];
}

// Example
let array = [1, 2, 3, 2, 4, 5, 1, 6, 3];
console.log("Original Array: " + array);
console.log("Array without duplicates: " + removeDuplicates(array));