// Select the first <ul> element in the document
const list = document.querySelector('ul');

// Select the second child element (index 1) of the list
const oldItem = list.children[1];   

// Create a new <li> element
const newItem = document.createElement('li');

// Set the text content of the new <li> element
newItem.textContent = "Human Being";

// Replace the old child element with the new <li> element
// list.replaceChild(newList, oldItem);

// Use replaceWith to replace the old child element with the new <li> element
oldItem.replaceWith(newItem);
