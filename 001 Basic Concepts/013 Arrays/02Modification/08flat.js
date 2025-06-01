// Example: Using flat() to flatten nested arrays in JavaScript

// Declare a nested array
let arr = ["spiderman", "superman", ['batman', 'ironman', ["thor"]], "hulk"];
console.log("Original array:", arr);

// flat(0) - no flattening
let flatArray0 = arr.flat(0);
// flat(1) - flatten one level
let flatArray1 = arr.flat(1);
// flat(2) - flatten two levels
let flatArray2 = arr.flat(2);
// flat(Infinity) - flatten all levels
let flatArrayInfinity = arr.flat(Infinity);

// Print the results
console.log("flat(0):", flatArray0);
console.log("flat(1):", flatArray1);
console.log("flat(2):", flatArray2);
console.log("flat(Infinity):", flatArrayInfinity);