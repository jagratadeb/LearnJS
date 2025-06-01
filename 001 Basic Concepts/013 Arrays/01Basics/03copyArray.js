// Example: Copying arrays in JavaScript

// Declare an array with mixed types
let arr1 = ["John", 202, true];

// Create a shallow copy of arr1 using the slice method
let arr2 = arr1.slice(0); // arr2 is a new array with the same elements as arr1

// Alternatively, you can use the spread operator to copy an array
// let arr2 = [...arr1];

// If you don't use slice or spread, arr1 and arr2 would reference the same array

// Add a new element to arr1
arr1.push("OK");

// Add a new element to arr2
arr2.push(75);

console.log(arr1); // Output: ["John", 202, true, "OK"]
console.log(arr2); // Output: ["John", 202, true, 75]


// A shallow copy is like making a photocopy of a document. The photocopy looks the same as the original, but if the original document has a folder attached to it, the photocopy will only have a picture of the folder, not the actual folder.

// In programming, a shallow copy of an array or object means that the top-level elements are copied, but if there are nested objects or arrays, they are not duplicated. Instead, both the original and the copy will reference the same nested objects or arrays.