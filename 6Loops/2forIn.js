let numbers = [1, 2, 3, 4, 5];

// For-in loop (for object properties)
let obj = { a: 1, b: 2, c: 3 };
console.log("For-in loop (object properties):");
for (let key in obj) {
  console.log(key + ": " + obj[key]);
}
