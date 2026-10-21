let str1 = "Hello World";
let count1 = {};

for (let i = 0; i < str1.length; i++) {
    let char = str1[i];

    if (char === " ") {
        continue;
    }

    count1[char] = (count1[char] || 0) + 1;
}

console.log(count1);

//------------------------------------------------------------
// Alternative approach using a for loop
//------------------------------------------------------------

let str = "Mohanaselvasurjith";
let count = {};

for (let i = 0; i < str.length; i++) {
    let char = str[i];

    if (count[char]) {
        count[char]++;
    } else {
        count[char] = 1;
    }
}

console.log(count);
// {
//   M: 1,
//   o: 1,
//   h: 2,
//   a: 3,
//   n: 1,
//   s: 2,
//   e: 1,
//   l: 1,
//   v: 1,
//   u: 1,
//   r: 1,
//   j: 1,
//   i: 1,
//   t: 1
// }

//------------------------------------------------------------
// Alternative approach using a for of
//------------------------------------------------------------
let str2 = "programming";
let count2 = {};

for (let char of str2) {
    if (count2[char] === undefined) {
        count2[char] = 1;
    } else {
        count2[char]++;
    }
}

console.log(count2);// { p: 1, r: 2, o: 1, g: 2, a: 1, m: 2, i: 1, n: 1 }