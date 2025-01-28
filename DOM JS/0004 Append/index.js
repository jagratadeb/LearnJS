// Select the <ul> element
const ul = document.querySelector('ul');

// Create a new <li> element
const NewEle1 = document.createElement('li');
// Set the text content of the new <li> to 'Hello'
NewEle1.textContent = 'Hello';
// Append the new <li> element to the <ul> element
ul.appendChild(NewEle1);

// Create another new <li> element
const NewEle2 = document.createElement('li');
// Set the text content of the new <li> to 'World'
NewEle2.textContent = 'World';
// Append the new <li> element to the <ul> element
ul.appendChild(NewEle2);
