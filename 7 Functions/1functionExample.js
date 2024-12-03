console.log("Functions");

// Function declaration
function add(a, b) {
  return a + b;
}
console.log("add(5, 3) =", add(5, 3)); // 8

// Function expression
const subtract = function (a, b) {
  return a - b;
};
console.log("subtract(5, 3) =", subtract(5, 3)); // 2

// Arrow function
const multiply = (a, b) => {
  return a * b;
};
console.log("multiply(5, 3) =", multiply(5, 3)); // 15

// Shorter arrow function
const divide = (a, b) => a / b;
console.log("divide(6, 3) =", divide(6, 3)); // 2

// Function with default parameters
function greet(name = "World") {
  return `Hello, ${name}!`;
}
console.log("greet() =", greet()); // Hello, World!
console.log("greet('Alice') =", greet("Alice")); // Hello, Alice!

// IIFE (Immediately Invoked Function Expression)
(function () {
  console.log("This is an IIFE");
})(); // This is an IIFE
