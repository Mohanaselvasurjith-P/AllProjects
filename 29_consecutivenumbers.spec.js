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


// Step-by-step explanation
// Index	nums[i]	            count	                maxCount
// 0	    1	                1	                    1
// 1	    1	                2	                    2
// 2	    0	                0	                    2
// 3	    1	                1	                    2
// 4	    1	                2	                    2
// 5	    1	                3	                    3