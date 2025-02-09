// Functions in JavaScript

// Function declaration
function greet(name) {
  return `Hello, ${name}!`;
}

// Function expression
const add = function(a, b) {
  return a + b;
};

// Arrow function
const multiply = (a, b) => a * b;

// Calling functions
console.log(greet("Alice")); // Hello, Alice!
console.log(add(2, 3)); // 5
console.log(multiply(4, 5)); // 20

// Default parameters
function sayHello(name = "stranger") {
  return `Hello, ${name}!`;
}

console.log(sayHello()); // Hello, stranger!
console.log(sayHello("Bob")); // Hello, Bob!

// Rest parameters
function sum(...numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}

console.log(sum(1, 2, 3)); // 6
console.log(sum(4, 5, 6, 7)); // 22

// Function as a parameter
function operate(a, b, operation) {
  return operation(a, b);
}

const subtract = (a, b) => a - b;

console.log(operate(10, 5, subtract)); // 5
console.log(operate(10, 5, add)); // 15
