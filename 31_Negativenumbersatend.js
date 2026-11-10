let arr = [2, -4, 5, -1, 8, -3, 6];

let positive = [];
let negative = [];

for (let num of arr) {
    if (num >= 0) {
        positive[positive.length] = num;
    } else {
        negative[negative.length] = num;
    }
}

let result = positive.concat(negative);

console.log(result);

//Using single array

let arr1 = [2, -4, 5, -1, 8, -3, 6];

let result1 = [];

for (let num of arr1) {
    if (num >= 0) {
        result1[result1.length] = num;
    }
}

for (let num of arr1) {
    if (num < 0) {
        result1[result1.length] = num;
    }
}

console.log(result1);
