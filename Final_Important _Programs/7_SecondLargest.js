let arr = [1, 8, 4, 5, 94, 76, 94, 4, 1, 64, 59, 20]

let original = [...new Set(arr)];

console.log(original);

for(let i=0; i<=original.length-1; i++){
  //for(let i=0; i<original.length; i++){
 // console.log(original[i]);
  for(let j=i+1; j<=original.length-1; j++){
   //  console.log(original[j]);
    if(original[i]<original[j]){
      let temp = original[i];
      original[i] = original[j];
      original[j] = temp;
    }
  }
}
console.log(original)
console.log(original[1])

//2nd method

let arr2 = Math.max(...original);
let secondmax = Math.max(...original.filter(n=>n!==arr2))
console.log(secondmax)
//----------------------------------------------------------
function secondLargest(arr) {
  const unique = [...new Set(arr)];//spread operator

  unique.sort((a, b) => b - a);

  return unique[1];
}

const numbers = [10, 20, 5, 30, 20, 15];

console.log(secondLargest(numbers));
// 20

//--------------------------------------------
//Second Method
//--------------------------------------------
let sec=[10,30,42,12,36,78,2,26,9,18];

const largest=[...new Set(sec)]
largest.sort((a,b)=>b-a);

console.log(largest[1]);