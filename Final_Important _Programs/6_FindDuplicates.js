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
//Using an object
//--------------------------------------------
let arr = [1, 2, 3, 2, 4, 3, 5];
let count = {};

for (let value of arr) {
    count[value] = (count[value] || 0) + 1;
}

for (let value in count) {
    if (count[value] > 1) {
        console.log(value);
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

console.log(frequency);

for(let name in frequency){
  if(frequency[name] > 1){
    console.log(`First duplicate name: ${name}`);
    break;
  }
}