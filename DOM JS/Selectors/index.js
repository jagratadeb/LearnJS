// Select elements by tag name
var elementsByTagName = document.getElementsByTagName('li');
console.log(elementsByTagName);



// Select elements by class name
var elementsByClassName = document.getElementsByClassName('hero');
console.log(elementsByClassName);



// Select an element by ID
var elementById = document.getElementById('main-hero');
console.log(elementById);



// Select the first element that matches a CSS selector
var firstSelectorID = document.querySelector('#main-hero');
console.log(firstSelectorID);

var firstSelectorClass = document.querySelector('.hero');
console.log(firstSelectorClass);

var firstSelectorTag = document.querySelector('li');
console.log(firstSelectorTag);



// Select all elements that match a CSS selector
var allElementsBySelector = document.querySelectorAll('li');
console.log(allElementsBySelector);