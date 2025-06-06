// Select the first <ul> element in the document
const ul = document.querySelector('ul');

// Select the second child element (index 1) of the list
const oldItem = ul.children[1];

// Create a new <li> element
const newItem = document.createElement('li');

// Set the text content of the new <li> element
newItem.textContent = "Human Being";

// Replace the old child element with the new <li> element
ul.replaceChild(newItem, oldItem);

// Use replaceWith to replace the old child element with the new <li> element
// oldItem.replaceWith(newItem);
