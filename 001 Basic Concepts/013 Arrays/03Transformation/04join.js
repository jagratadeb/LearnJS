// Example: Joining array elements into a string using join() in JavaScript

// Declare an array of fruit names
let fruits = ["apple", "mango", "banana", "orange"];

// Print the original array and its type
console.log("Original array:", fruits); // Output: ["apple", "mango", "banana", "orange"]
console.log("Type of fruits:", typeof fruits); // Output: object

// Use join() to combine all elements into a single string (no separator)
console.log("\nUsing Join Method:");
let str = fruits.join(""); // "applemangobananaorange"
console.log("Joined string:", str); // Output: "applemangobananaorange"
console.log("Type of str:", typeof str); // Output: string