// Variables in JavaScript

// Declaring variables using var, let, and const
var name = "John";
let age = 30;
const isStudent = true;

// Variable reassignment
name = "Jane";
age = 25;

// Output variables
console.log(name); // Jane
console.log(age); // 25
console.log(isStudent); // true

// Variable scope
function testScope() {
  var localVar = "I'm local";
  let blockVar = "I'm block-scoped";
  const constVar = "I'm a constant";

  console.log(localVar); // I'm local
  console.log(blockVar); // I'm block-scoped
  console.log(constVar); // I'm a constant
}

testScope();

// console.log(localVar); // Error: localVar is not defined
// console.log(blockVar); // Error: blockVar is not defined
// console.log(constVar); // Error: constVar is not defined

// Hoisting
console.log(hoistedVar); // undefined
var hoistedVar = "I'm hoisted";

// console.log(hoistedLet); // Error: Cannot access 'hoistedLet' before initialization
let hoistedLet = "I'm not hoisted";

// console.log(hoistedConst); // Error: Cannot access 'hoistedConst' before initialization
const hoistedConst = "I'm not hoisted";
