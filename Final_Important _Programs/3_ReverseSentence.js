let sentence = "My Name Is Shashi";

let words = sentence.split(" ");
let reversedSentence = "";

for (let i = words.length - 1; i >= 0; i--) {
    reversedSentence += words[i];//ShashiIsNameMy

    if (i !== 0) {
        reversedSentence += " ";//you need spaces between the words.
    }
}

console.log(reversedSentence);
console.log(sentence.split(" ").reverse().join(" "));
console.log(sentence.split(" ").map((n) => n.split("").reverse().join("")).join(" "));