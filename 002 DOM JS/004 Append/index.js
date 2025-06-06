// Select the <ul> element
const ul = document.querySelector('ul');

// Create a new <li> element
const newEle1 = document.createElement('li');
// Set the text content of the new <li> to 'Hello'
newEle1.textContent = 'Hello';
// Append the new <li> element to the <ul> element
ul.appendChild(newEle1);

// Create another new <li> element
const newEle2 = document.createElement('li');
// Set the text content of the new <li> to 'World'
newEle2.textContent = 'World';
// Append the new <li> element to the <ul> element
ul.appendChild(newEle2);
