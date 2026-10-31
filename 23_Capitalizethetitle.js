let y = '1capiTalize 2tHe 3titLe';

let words = y.toLowerCase().split(' ');

for (let i = 0; i < words.length; i++) {
    words[i] = words[i][0] + words[i][1].toUpperCase() + words[i].slice(2);
}

console.log(words.join(' '));


// Line-by-line explanation
// 1. toLowerCase() — converts all characters to lowercase.
//    'capitalize the title'
// 2. split(' ') — splits the string into an array.
//    ['capitalize', 'the', 'title']
// 3. map(word => ...) — processes each word individually.
// 4. word.charAt(0).toUpperCase() — converts the first letter to uppercase.(C)
// 5. word.slice(1) — gets the remaining characters of the word.(Remaining characters apitalize)
// 6. join(' ') — joins the words back into a string with spaces.

