let x = '1capiTalize 2tHe 3titLe';

let result = x
    .toLowerCase()
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

console.log(result);

// Line-by-line explanation
// 1. toLowerCase() — converts all characters to lowercase.
//    'capitalize the title'
// 2. split(' ') — splits the string into an array.
//    ['capitalize', 'the', 'title']
// 3. map(word => ...) — processes each word individually.
// 4. word.charAt(0).toUpperCase() — converts the first letter to uppercase.(C)
// 5. word.slice(1) — gets the remaining characters of the word.(Remaining characters apitalize)
// 6. join(' ') — joins the words back into a string with spaces.