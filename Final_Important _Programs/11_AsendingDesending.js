let array = [5, 2, 8, 1, 9, 3];

console.log("Original Array: " + array);

// Ascending
let ascending = [...array].sort((a, b) => a - b);
console.log("Ascending Order: " + ascending);

// Descending
let descending = [...array].sort((a, b) => b - a);
console.log("Descending Order: " + descending);

//sorting without sort()

let arr = [5, 2, 8, 1, 9, 3];

for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
        //for (let j = 0; j < arr.length; j++) {//opposite of above
        if (arr[i] > arr[j]) {   //ascending
            //if (arr[i] < arr[j]) {   //descending
            let temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
    }
}
console.log("Sorted Array (Ascending): " + arr);