// String to Number
let result1 = Number('5');
console.log(result1); // Output: 5
console.log(typeof result1); // Output: 'number'

// Number to String
let result2 = String(5);
console.log(result2); // Output: '5'
console.log(typeof result2); // Output: 'string'

// Boolean to Number
let result3 = Number(true);
console.log(result3); // Output: 1
console.log(typeof result3); // Output: 'number'

// Number to Boolean
let result4 = Boolean(0);
console.log(result4); // Output: false
console.log(typeof result4); // Output: 'boolean'

// String to Boolean
let result5 = Boolean('hello');
console.log(result5); // Output: true
console.log(typeof result5); // Output: 'boolean'

// Boolean to String
let result6 = String(false);
console.log(result6); // Output: 'false'
console.log(typeof result6); // Output: 'string'

// Null to Number
let result7 = Number(null);
console.log(result7); // Output: 0
console.log(typeof result7); // Output: 'number'

// Undefined to Number
let result8 = Number(undefined);
console.log(result8); // Output: NaN
console.log(typeof result8); // Output: 'number'

// Array to String
let result9 = String([1, 2, 3]);
console.log(result9); // Output: '1,2,3'
console.log(typeof result9); // Output: 'string'

// Object to String
let result10 = String({a: 1});
console.log(result10); // Output: '[object Object]'
console.log(typeof result10); // Output: 'string'
