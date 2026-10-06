function checkOddEven(num) {
  if (num % 2 === 0) {
    return "Even";
  } else {
    return "Odd";
  }
}

console.log(checkOddEven(10));
console.log(checkOddEven(7));

//--------------------------------------------
//Print all even numbers from 1 to 10
//--------------------------------------------
function printEvenNumbers(n) {
  for (let i = 1; i <= n; i++) {
    if (i % 2 === 0) {
      console.log(i);
    }
  }
}

printEvenNumbers(10);
//--------------------------------------------
//Print all odd and even numbers in array
//--------------------------------------------
function evenOdd(arr) {
  return {
    even: arr.filter(num => num % 2 === 0),
    odd: arr.filter(num => num % 2 !== 0)
  };
}

console.log(evenOdd([1, 2, 3, 4, 5, 6]));

//Another method
let arr =[1,23,3,4,4,5,6,5,3,6,7,7,8,4,3,2,4,5,6,76];

for(ar of arr){
    if(ar%2==0){
      console.log('even number:' + ar);
    }           
else{
  console.log('odd number:' + ar);  
}
}