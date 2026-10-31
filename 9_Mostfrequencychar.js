
let text = "aabbbcccc";
let frequency={};
let value = 0;
let key = "";
for(char of text){
  if(frequency[char]){
    frequency[char]++
  }else
    frequency[char]=1
}
console.log(frequency);

for(max in frequency){
  if(frequency[max] > value){
    value = frequency[max];
    key =max;
  }
}
console.log(`Maximum no of count present:${value}`);//4
console.log(`Maximum no's key present is:${key}`);//c
//------------------------------------------------------------
// let text = "aabbbcccc";
// let frequency = {};
// let maxCount = 0;
// let maxChar = "";

// for (let char of text) {
//     frequency[char] = (frequency[char] || 0) + 1;

//     if (frequency[char] > maxCount) {
//         maxCount = frequency[char];
//         console.log(maxCount);//1 2 3 4 
//         maxChar = char;
//     }
// }

// console.log(maxChar);
