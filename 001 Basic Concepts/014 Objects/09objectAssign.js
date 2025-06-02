// Example: Using Object.assign() to copy properties from source to target object

const target = {
    a: 1,
    b: 2,
};
const source = {
    b: 4,
    c: 5
};

const result = Object.assign(target, source);
console.log("Result:", result); // Output: { a: 1, b: 4, c: 5 }
console.log("Target after assign:", target); // Output: { a: 1, b: 4, c: 5 }
