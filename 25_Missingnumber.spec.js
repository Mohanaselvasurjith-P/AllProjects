//Missing Number in an Array at any spot

let numbers = [5, 2, 1, 4];

let n = numbers.length + 1;
let expectedSum = (n * (n + 1)) / 2;
let actualSum = numbers.reduce((total, num) => total + num, 0);
let missingNumber = expectedSum - actualSum;

console.log("Missing number:", missingNumber);

//--------------------------------------------
//Second Method - Normal ordered array
//--------------------------------------------
let numbers1 = [1, 2, 4, 5];

for(let i = 1; i < numbers1.length; i++){
  if(!numbers1.includes(i)){
    console.log(i);
    break;
  }
}


// How it works
// 1. numbers.length + 1 → 5, because the complete sequence should contain 5 numbers.
// 2. (n * (n + 1)) / 2 → 15, the expected sum of numbers from 1 to 5.
// 3. reduce() adds the existing numbers: 1 + 2 + 4 + 5 = 12.
// 4. expectedSum - actualSum → 15 - 12 = 3.