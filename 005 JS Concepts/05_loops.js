// Loops in JavaScript

// For loop
for (let i = 0; i < 5; i++) {
  console.log(i);
}

// While loop
let j = 0;
while (j < 5) {
  console.log(j);
  j++;
}

// For...of loop
const numbers = [1, 2, 3, 4, 5];
for (const number of numbers) {
  console.log(number);
}

// For...in loop
const person = { name: "John", age: 30, city: "New York" };
for (const key in person) {
  console.log(`${key}: ${person[key]}`);
}

// Do...while loop
let k = 0;
do {
  console.log(k);
  k++;
} while (k < 5);

// Nested loops
for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    console.log(`i: ${i}, j: ${j}`);
  }
}

// Breaking out of a loop
for (let i = 0; i < 5; i++) {
  if (i === 3) {
    break;
  }
  console.log(i);
}

// Continuing to the next iteration
for (let i = 0; i < 5; i++) {
  if (i === 3) {
    continue;
  }
  console.log(i);
}
