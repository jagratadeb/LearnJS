// Example: Combining arrays using the spread operator in JavaScript

// Declare three arrays
let arr1 = ["Hello"];
let arr2 = ["World"];
let arr3 = ['!'];

// Use the spread operator (...) to combine all arrays into a new array
let spreadOperator = [...arr1, ...arr2, ...arr3];

// Print the original arrays and the combined array
console.log("arr1:", arr1); // Output: ["Hello"]
console.log("arr2:", arr2); // Output: ["World"]
console.log("arr3:", arr3); // Output: ["!"]
console.log("Combined with spread operator:", spreadOperator); // Output: ["Hello", "World", "!"]