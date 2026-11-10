let str = "Hello World";
let vowels = 0;
let consonants = 0;

str = str.toLowerCase();

for (let i = 0; i < str.length; i++) {
    let ch = str[i];

    if (ch >= 'a' && ch <= 'z') {
        if ("aeiou".includes(ch)) {
            vowels++;
        } else {
            consonants++;
        }
    }
}

console.log("Vowels:", vowels);
console.log("Consonants:", consonants);

// Vowels (உயிரெழுத்துகள்): A, E, I, O, U
// Consonants (மெய்யெழுத்துகள்): மீதமுள்ள 21 எழுத்துகள்.

//----------------------------
// Second Method
//----------------------------
let str1 = "Mohanaselvasurjith".toLowerCase();
let vowels1 = 0;
let consonants1 = 0;

for (let char of str1) {
    if (/[a-z]/.test(char)) {  //The test() method checks whether a character matches the regex pattern.Return type is boolean
        if ("aeiou".includes(char)) {
            vowels1++;
        } else {
            consonants1++;
        }
    }
}

console.log("Vowels:", vowels1);
console.log("Consonants:", consonants1);