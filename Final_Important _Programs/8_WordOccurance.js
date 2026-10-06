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

for (let name in count) {
    console.log(name + "    " + count[name]);
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