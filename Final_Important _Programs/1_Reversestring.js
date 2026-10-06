let str ='Mohanaselvasurjith';
let reverse ="";
for(let i =str.length-1; i>=0;i--){
    reverse =reverse+str[i];
}
console.log(reverse);
console.log([...str].reverse().join(""));
console.log(str.split("").reverse().join(""));
console.log(str.split(" ").map((n) => n.split("").reverse().join("")).join(" "));

//--------------------------------------------
//Second Method
//--------------------------------------------
function reverseString(str) {
  return str.split("").reverse().join("");
}

console.log(reverseString("hello")); // "olleh"

//--------------------------------------------
//Using For...of
//--------------------------------------------
let name ="Mohanaselvasurjith";
let rev="";

for(char of name){
  rev = char + rev;
}
console.log(rev)