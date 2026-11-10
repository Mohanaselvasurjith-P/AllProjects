
let arr = [0, -1, 2, 3, 1];

let result = [];

for (let i = 0; i < arr.length; i++) {

    for (let j = i + 1; j < arr.length; j++) {

        for (let k = j + 1; k < arr.length; k++) {

            if (arr[i] + arr[j] + arr[k] === 0) {
                result.push([arr[i], arr[j], arr[k]]);
            }
        }
    }
}

console.log(result);

//Second Approach
let arr1 = [0, -1, 2, 3, 1];

for (let i = 0; i < arr1.length; i++) {

    for (let j = i + 1; j < arr1.length; j++) {

        for (let k = j + 1; k < arr1.length; k++) {

            let sum1 = arr1[i] + arr1[j] + arr1[k];

            if (sum1 === 0) {
                console.log(arr1[i], arr1[j], arr1[k]);
            }
        }
    }
}