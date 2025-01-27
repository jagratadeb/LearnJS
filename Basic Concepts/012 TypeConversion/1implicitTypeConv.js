// String + Number
let result1 = '5' + 2;
console.log(result1); // Output: '52'
console.log(typeof result1); // Output: 'string'

// String - Number
let result2 = '10' - 5;
console.log(result2); // Output: 5
console.log(typeof result2); // Output: 'number'

// Boolean + Number
let result3 = true + 1;
console.log(result3); // Output: 2
console.log(typeof result3); // Output: 'number'

// String + Boolean
let result4 = '5' + true;
console.log(result4); // Output: '5true'
console.log(typeof result4); // Output: 'string'

// Number + Null
let result5 = 5 + null;
console.log(result5); // Output: 5
console.log(typeof result5); // Output: 'number'

// Number + Undefined
let result6 = 5 + undefined;
console.log(result6); // Output: NaN
console.log(typeof result6); // Output: 'number'

// String + Null
let result7 = '5' + null;
console.log(result7); // Output: '5null'
console.log(typeof result7); // Output: 'string'

// String + Undefined
let result8 = '5' + undefined;
console.log(result8); // Output: '5undefined'
console.log(typeof result8); // Output: 'string'

// Array + Number
let result9 = [1, 2, 3] + 4;
console.log(result9); // Output: '1,2,34'
console.log(typeof result9); // Output: 'string'

// Object + String
let result10 = {a: 1} + '5';
console.log(result10); // Output: '[object Object]5'
console.log(typeof result10); // Output: 'string'