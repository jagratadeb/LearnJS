// Select the element with the class 'hero'
let element = document.querySelector('.hero');

// Check if the previous sibling element exists
if (element.previousElementSibling == null) {
    // If there is no previous sibling, log a message to the console
    console.log('No Previous Sibling');
} else {
    // If there is a previous sibling, log that element to the console
    console.log(element.previousElementSibling);
}
