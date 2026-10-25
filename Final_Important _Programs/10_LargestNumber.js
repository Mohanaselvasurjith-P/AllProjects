let num = [1, 5, 6, 34, 23, 11, 65, 78, 98, 4, 8, 6, 3, 2, 65, 2]
let original=[...new Set(num)];
console.log(original);

for(i=0; i<=original.length-1;i++){
  for(j=i+1; j<=original.length-1; j++){
  if(original[i]<original[j]){
    let temp =original[i];
    original[i] =original[j];
    original[j]=temp;
  }
    
  }
}
console.log(original);
console.log(original[0]);
console.log(original[original.length-1])
//-------------------------------------------------------------------------
function findMax(arr) {
  return Math.max(...arr);  // return Math.min(...arr); to get minimum numbers in array
}

console.log(findMax([10, 5, 30, 20])); // 30
//-----------------------------------------------------------
function findMin(arr) {
  return Math.min(...arr);  // return Math.min(...arr); to get minimum numbers in array
}

console.log(findMin([10, 5, 30, 20])); // 5