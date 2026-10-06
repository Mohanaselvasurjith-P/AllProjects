function reverseString(str) {
  const arr = str.split("");

  let left = 0;
  let right = arr.length - 1;

  while (left < right) {

    [arr[left], arr[right]] = [arr[right], arr[left]];

    left++;
    right--;
  }

  return arr.join("");
}

console.log(reverseString("abcdefghijklmnopqrstuvwxyz")); 

//.......................................................
//Using For...of
//.......................................................
let str = "mohanaselvasurjith";
let str1 = [...str]
left = 0;
right = str.length-1;

for(char of str1){
  if(left<right){
    [str1[left], str1[right]]=[str1[right], str1[left]]
  }
  left++;
  right--;
}
console.log(str1.join(""));