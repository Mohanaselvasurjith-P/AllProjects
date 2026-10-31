let names = ["Shashi", "Ravi", "Suman", "Shashi", "Suman"];

let count = {};

for (let i = 0; i < names.length; i++) {
    let name = names[i];

    if (count[name] === undefined) {
        count[name] = 1;
    } else {
        count[name]++;
    }
}
    console.log(count);//{ Shashi: 2, Ravi: 1, Suman: 2 }
for (let name in count) {
    console.log(name + "    " + count[name]);
    // Shashi    2
    // Ravi    1
    // Suman    2
}

//--------------------------------------------
//Second Method
//--------------------------------------------

let names1 = ["Alice", "Bob", "Charlie", "Alice", "David", "Bob", "Alice"];
let frequency = {};

for(let name of names1){
  frequency[name] = (frequency[name] || 0) + 1;
}

console.log(frequency);


// Iteration	name	                Previous                        count	                Calculation	Updated frequency
// 1	        Shashi	                undefined	                    0 + 1	                Shashi: 1
// 2	        Ravi	                undefined	                    0 + 1	                Ravi: 1
// 3	        Suman	                undefined	                    0 + 1	                Suman: 1
// 4	        Shashi	                1	                            1 + 1	                Shashi: 2
// 5	        Suman	                1	                            1 + 1	                Suman: 2