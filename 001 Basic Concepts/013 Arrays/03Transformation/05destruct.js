// Example: Array destructuring in JavaScript

// Declare an array with three elements
let arr = ["Thomas", "Chad", "Brad"];

// Destructure the array into individual variables
let [item1, item2, item3, item4] = arr; // item4 will be undefined since arr has only 3 elements

// Print the values of the variables
console.log("item1:", item1); // Output: Thomas
console.log("item2:", item2); // Output: Chad
console.log("item3:", item3); // Output: Brad
console.log("item4:", item4); // Output: undefined

// Array destructuring is a convenient way to extract values from arrays and assign them to variables.
// It allows us to unpack elements from arrays into distinct variables in a concise and readable manner.
