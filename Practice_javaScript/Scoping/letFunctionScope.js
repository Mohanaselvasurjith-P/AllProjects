//Function scoped
//let is function scoped +block scope
//Accessing inside,condition and outside function is possible when variable is globally declared
// =====================================================
// CASE 1: let declared globally
// =====================================================

let fname = "Mohan";

function details() {

    // Accessible inside function
    console.log("Case 1 - Inside function:", fname);

    if (true) {
        // Accessible inside condition
        console.log("Case 1 - Inside condition:", fname);
    }
}

details();

// Accessible outside function
console.log("Case 1 - Outside function:", fname);


// =====================================================
// CASE 2: let declared inside function
// =====================================================

function details1() {

    // let is block scoped
    let fname1 = "Surjith";

    // Accessible inside function
    console.log("Case 2 - Inside function:", fname1);

    if (true) {
        // Accessible inside condition
        console.log("Case 2 - Inside condition:", fname1);
    }
}

details1();

// NOT accessible outside function
// console.log("Case 2 - Outside function:", fname1);
// ❌ ReferenceError: fname1 is not defined


// =====================================================
// CASE 3: let declared inside if block
// Demonstrating block scope
// =====================================================

function details3() {

    if (true) {

        let fname2 = "Vanitha";

        // Accessible inside the if block
        console.log("Case 3 - Inside condition:", fname2);
    }

    // NOT accessible outside the if block
    // console.log("Case 3 - After condition:", fname2);
    // ❌ ReferenceError: fname2 is not defined
}

details3();

// NOT accessible outside function
// console.log("Case 3 - Outside function:", fname2);
// ❌ ReferenceError: fname2 is not defined