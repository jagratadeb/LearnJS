// Select the first <div> element in the document
var parent = document.querySelector('html');

// Get the parent element of the selected <div>
var p = parent.parentElement;

// Log the parent element to the console
console.log(p); // returns null

console.log("=====================")


// Select the first <div> element in the document
var parent = document.querySelector('html'); 

// Get the parent element of the selected <div>
var q = parent.parentNode;

// Log the parent element to the console
console.log(q) // returns document