// Example: Closure in JavaScript

// A closure is a function that remembers its outer (enclosing) scope even after the outer function has finished executing.
// This allows the inner function to access variables from the outer function's scope, even after the outer function has returned.
// Closures are commonly used for data privacy, function factories, and maintaining state in asynchronous code.

function makeCounter() {
    let count = 0;
    return function () {
        count++;
        return count;
    };
}

const counter = makeCounter();
console.log(counter()); // Output: 1
console.log(counter()); // Output: 2
console.log(counter()); // Output: 3

// In this example, the returned function forms a closure over the variable 'count'.
// Even after makeCounter() has finished executing, the inner function still has access to 'count',
// allowing it to remember and update the value across multiple calls.
