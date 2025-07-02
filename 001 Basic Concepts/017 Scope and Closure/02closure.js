// Example: Closure in JavaScript

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
