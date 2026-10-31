let str ='Mohanaselvasurjith';
let reverse ="";
for(let i =str.length-1; i>=0;i--){
    reverse =reverse+str[i];
}
console.log(reverse);
console.log([...str].reverse().join(""));  //uses the spread operator (...) to convert a string into an array of individual characters. i.e ["h", "e", "l", "l", "o"]
console.log(str.split("").reverse().join(""));
// console.log(str.split(" ").map((n) => n.split("").reverse().join("")).join(" "));

//--------------------------------------------
//Second Method
//--------------------------------------------
function reverseString(str) {
  return str.split("").reverse().join("");
}

console.log(reverseString("madam")); // "madam"

//--------------------------------------------
//Using For...of[Not working need to check]
//--------------------------------------------
let name ="Mohanaselvasurjith";
let rev="";

for(char of name){
  rev = char + rev;
}
console.log(rev)
//--------------------------------------------

// Feature	                                      [...str]	                      str.split("")
// Converts string into characters	              Yes	                            Yes
// Returns an array	                              Yes	                            Yes
// Can split using a delimiter	                  No	                            Yes
// Handles Unicode code points	                  Yes	Not always;                 can split surrogate pairs
// Easy to read	                                  Modern syntax	                  Common and flexible