// Example 1: Assigning an anonymous function to a variable
const greet = function (name) {
    console.log('Hello, ' + name + '!');
};
greet('World'); // Output: Hello, World!

// Example 2: Passing an anonymous function as an argument
setTimeout(function () {
    console.log('This message is shown after 2 second');
}, 2000);

// Example 3: Using an anonymous function in array methods
const numbers = [1, 2, 3, 4, 5];
const squared = numbers.map(function (num) {
    return num * num;
});
console.log(squared); // Output: [1, 4, 9, 16, 25]