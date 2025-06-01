// Example: Using splice() to add or remove elements from an array in JavaScript

// Declare an array with 5 elements
let arr1 = [1, 2, 3, 4, 5];

// Splice - remove 1 element at index 2 and insert 'a', 'b' at that position
// Syntax: splice(start, deleteCount, item1, item2, ...)
let newArr = arr1.splice(2, 1, 'a', 'b'); // removes 3, inserts 'a' and 'b'

// Print the updated array and the removed elements
console.log("Array after splice:", arr1); // Output: [1, 2, 'a', 'b', 4, 5]
console.log("Returns the deleted element:", newArr); // Output: [3]
