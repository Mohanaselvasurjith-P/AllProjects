function findDuplicates(arr) {
  const seen = new Set();
  const duplicates = new Set();

  for (const num of arr) {
    if (seen.has(num)) {
      duplicates.add(num);
    }

    seen.add(num);
  }

  return [...duplicates];
}

const numbers = [1, 2, 3, 2, 4, 5, 3, 6];

console.log(findDuplicates(numbers));
// [2, 3]

//--------------------------------------------
//Using variable
//--------------------------------------------
let ar = [10, 20, 30, 20, 40, 10, 50];

let seen = new Set();
let duplicates = new Set();

for (const num of ar) {
    if (seen.has(num)) {
        duplicates.add(num);
    }

    seen.add(num);
}

console.log([...duplicates]); // [20, 10]
//--------------------------------------------
//Using an object
//--------------------------------------------
let arr = [1, 2, 3, 2, 4, 3, 5];
let count = {};

for (let value of arr) {
    count[value] = (count[value] || 0) + 1;
}

for (let value in count) {
    if (count[value] > 1) {
        console.log(value);//2 below 3
    }
}
//--------------------------------------------
//Using an object-convert object to array
//--------------------------------------------
let arr1 =[1,23,3,4,4,5,6,5,3,6,7,7,8,4,3,2,4,5,6,76];
let frequency1 = {};
let dup = [];
for(char of arr1){
  frequency1[char] = (frequency1[char] || 0) +1;
}
for(char in frequency1){
  if(frequency1[char]>1){
    console.log(`${char} is a duplicate`)
    dup.push(char);
  }
}
console.log(dup);


//First Duplicate return & Count of words

let names = ["Alice", "Bob", "Charlie", "Alice", "David", "Bob", "Alice"];
let frequency = {};

for(let name of names){
  frequency[name] = (frequency[name] || 0) + 1;
}

console.log(frequency);//{ Alice: 3, Bob: 2, Charlie: 1, David: 1 }

for(let name in frequency){
  if(frequency[name] > 1){
    console.log(`First duplicate name: ${name}`);//First duplicate name: Alice
    break;
  }
}

//let arr = [10, 20, 30, 20, 40, 10];
// Iteration	                num	seen before checking	              Duplicate?	              duplicates after
// 1	                        10	{}	                                No	                      {}
// 2	                        20	{10}	                              No	                      {}
// 3	                        30	{10, 20}	                          No	                      {}
// 4	                        20	{10, 20, 30}	                      Yes	                      {20}
// 5	                        40	{10, 20, 30}	                      No	                      {20}
// 6	                        10	{10, 20, 30, 40}	                  Yes	                      {20, 10}