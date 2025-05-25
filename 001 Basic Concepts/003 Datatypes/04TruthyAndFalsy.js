/**
 * Examples of Truthy and Falsy values in JavaScript
 */

// Falsy values
const falsyValues = [false, 0, '', null, undefined, NaN];
console.log('Falsy values:');
falsyValues.forEach(value =>
    console.log(JSON.stringify(value), Boolean(value))
);

// Truthy values
const truthyValues = [true, 1, 'hello', [], {}, function () { }, Infinity];
console.log('\nTruthy values:');
truthyValues.forEach(value => 
    console.log(JSON.stringify(value), Boolean(value))
);