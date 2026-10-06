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