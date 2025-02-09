// Arrays in JavaScript

// Creating an array
const fruits = ["Apple", "Banana", "Cherry"];

// Accessing array elements
console.log(fruits[0]); // Apple
console.log(fruits[1]); // Banana

// Adding elements to an array
fruits.push("Date");
console.log(fruits); // ["Apple", "Banana", "Cherry", "Date"]

// Removing elements from an array
fruits.pop();
console.log(fruits); // ["Apple", "Banana", "Cherry"]

// Array methods
const numbers = [1, 2, 3, 4, 5];

// forEach
numbers.forEach(num => console.log(num));

// map
const doubled = numbers.map(num => num * 2);
console.log(doubled); // [2, 4, 6, 8, 10]

// filter
const even = numbers.filter(num => num % 2 === 0);
console.log(even); // [2, 4]

// reduce
const sum = numbers.reduce((total, num) => total + num, 0);
console.log(sum); // 15

// find
const firstEven = numbers.find(num => num % 2 === 0);
console.log(firstEven); // 2

// includes
const hasThree = numbers.includes(3);
console.log(hasThree); // true

// spread operator
const moreNumbers = [...numbers, 6, 7, 8];
console.log(moreNumbers); // [1, 2, 3, 4, 5, 6, 7, 8]
