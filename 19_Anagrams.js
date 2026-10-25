let str = "listen";
let str1 = "silent";

let result =
    str.split("").sort().join("") ===
    str1.split("").sort().join("");

console.log(result ? "Anagram" : "Not Anagram");


//----------------------------------------------------
//Print anagrams Without sort()
//----------------------------------------------------
let a = "silent";
let b = "listen"
let isanagram = true;
for(char of a){
  if(!b.includes(char)){
    console.log("not anagram");
    isanagram = false;
  }
}
console.log(isanagram);

//----------------------------------------------------
//Print anagrams Without sort()
//----------------------------------------------------
let a1 = "silent";
let b1 = "listen";
let isanagram1 = true;
  if(a1.length===b1.length){
    console.log("it is elligible to process further whether it anagram or not");
  }
for(char of a1){
  if(!b1.includes(char)){
    console.log("not anagram");
    isanagram1 = false;
  }
}
console.log(isanagram1);
