// Function with default parameters
function greet(name = "World") {
  return `Hello, ${name}!`;
}
console.log("greet() =", greet()); // Hello, World!
console.log("greet('Alice') =", greet("Alice")); // Hello, Alice!
