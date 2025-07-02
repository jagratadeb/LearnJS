// Example of variable hoisting
// At this point, myVar is hoisted and initialized with 'undefined'
console.log(myVar); // Output: undefined
var myVar = 10; // myVar is now assigned the value 10
console.log(myVar); // Output: 10

// Example of function hoisting
// Function declarations are hoisted entirely, so this function can be called before its declaration
hoistedFunction(); // Output: "This function has been hoisted!"

function hoistedFunction() {
    console.log("This function has been hoisted!");
}

// Example of let and const (no hoisting)
// Variables declared with 'let' and 'const' are hoisted but not initialized
// Accessing them before declaration results in a ReferenceError
console.log(myLet); // Output: ReferenceError: Cannot access 'myLet' before initialization
let myLet = 20; // myLet is now assigned the value 20

console.log(myConst); // Output: ReferenceError: Cannot access 'myConst' before initialization
const myConst = 30; // myConst is now assigned the value 30