let arr1 = ["John", 202, true];

// Create a shallow copy of arr1 using the slice method
let arr2 = arr1.slice(0);


// spread (...) operator can also be used for the purpose
// let arr2 = [...arr1];

// If slice is not used, arr1 and arr2 would reference the same array

// Add a new element to arr1
arr1.push("OK");

// Add a new element to arr2
arr2.push(75);

console.log(arr1); // Output: ["John", 202, true, "OK"]

console.log(arr2); // Output: ["John", 202, true, 75]


// A shallow copy is like making a photocopy of a document. The photocopy looks the same as the original, but if the original document has a folder attached to it, the photocopy will only have a picture of the folder, not the actual folder.

// In programming, a shallow copy of an array or object means that the top-level elements are copied, but if there are nested objects or arrays, they are not duplicated. Instead, both the original and the copy will reference the same nested objects or arrays.