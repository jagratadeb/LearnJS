// String to Number
let result1 = Number('5');
console.log(result1, typeof result1); // Output: 5 'number'

// Number to String
let result2 = String(5);
console.log(result2, typeof result2); // Output: '5' 'string'

// Boolean to Number
let result3 = Number(true);
console.log(result3, typeof result3); // Output: 1 'number'

// Number to Boolean
let result4 = Boolean(0);
console.log(result4, typeof result4); // Output: false 'boolean'

// String to Boolean
let result5 = Boolean('hello');
console.log(result5, typeof result5); // Output: true 'boolean'

// Boolean to String
let result6 = String(false);
console.log(result6, typeof result6); // Output: 'false' 'string'

// Null to Number
let result7 = Number(null);
console.log(result7, typeof result7); // Output: 0 'number'

// Undefined to Number
let result8 = Number(undefined);
console.log(result8, typeof result8); // Output: NaN 'number'

// Array to String
let result9 = String([1, 2, 3]);
console.log(result9, typeof result9); // Output: '1,2,3' 'string'

// Object to String
let result10 = String({a: 1});
console.log(result10, typeof result10); // Output: '[object Object]' 'string'