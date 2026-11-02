
let nums = [1, 1, 0, 1, 1, 1];

let count = 0;
let maxCount = 0;

for (let i = 0; i < nums.length; i++) {

    if (nums[i] === 1) {
        count++;
    } else {
        count = 0;
    }

    if (count > maxCount) {
        maxCount = count;
    }
}

console.log(maxCount); // 3
