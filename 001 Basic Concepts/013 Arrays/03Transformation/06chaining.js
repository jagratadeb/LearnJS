// Example: Method Chaining with Arrays in JavaScript

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Chaining filter, map, and reduce methods
const result = numbers
    .filter(num => num % 2 === 0)      // Keep even numbers: [2, 4, 6, 8, 10]
    .map(num => num * 2)              // Double each: [4, 8, 12, 16, 20]
    .reduce((sum, num) => sum + num, 0); // Sum: 60

console.log(result); // Output: 60

// Example: Chaining string methods
const str = "   JavaScript is awesome!   ";
const chainedStr = str.trim().toUpperCase().slice(0, 10);
console.log(chainedStr); // Output: "JAVASCRIPT"
