// Example: Using reduce() to reduce an array to a single value

// Declare an array of numbers
let arr1 = [1, 2, 3, 4, 5];

// Reduce - sum all elements in the array
let reducedValue = arr1.reduce((accumulator, current) => accumulator + current, 0); // 15

// Print the reduced value
console.log("Reduced Value:", reducedValue); // Output: 15
