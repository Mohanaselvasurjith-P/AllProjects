let arr = [1, 2, 3, 4, 5];
let result = [];
let chunk = [];

for (let i = 0; i < arr.length; i++) {
    chunk[chunk.length] = arr[i];

    if (chunk.length === 2) {
        result[result.length] = chunk;
        chunk = [];
    }
}

if (chunk.length > 0) {
    result[result.length] = chunk;
}

console.log(result);
