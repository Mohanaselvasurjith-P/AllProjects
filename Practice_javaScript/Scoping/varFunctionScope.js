//Function scoped
//var is function scoped
//Accessing inside,condition and outside function is possible when variable is globally declared
// =====================================================
// CASE 1: var declared globally
// =====================================================

// var is globally declared
var fname = "Mohan";

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
// CASE 2: var declared inside function
// =====================================================

function details1() {

    // var is function scoped
    var fname1 = "Surjith";

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
// CASE 3: var declared inside if block
// Demonstrating var hoisting
// =====================================================

function details3() {

    // var declaration is hoisted to the top of the function
    // So fname2 exists here, but its value is undefined
    console.log("Case 3 - Before declaration:", fname2);

    if (true) {

        var fname2 = "Vanitha";

        // Now fname2 has a value
        console.log("Case 3 - Inside condition:", fname2);
    }

    // Still accessible because var is function scoped
    console.log("Case 3 - After condition:", fname2);
}

details3();

// NOT accessible outside function
// console.log("Case 3 - Outside function:", fname2);
// ❌ ReferenceError: fname2 is not defined