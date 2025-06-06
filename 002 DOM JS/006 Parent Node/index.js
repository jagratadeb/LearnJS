// Select the <html> element in the document
var parent = document.querySelector('html');

// Get the parent element of the selected <html> element
var p = parent.parentElement;

// Log the parent element to the console
console.log(p); // returns null

console.log("=====================")

// Select the <html> element in the document
var parent = document.querySelector('html');

// Get the parent node of the selected <html> element
var q = parent.parentNode;

// Log the parent node to the console
console.log(q) // returns document