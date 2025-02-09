// Modules in JavaScript

// Exporting a function
export const greet = (name) => {
  return `Hello, ${name}!`;
};

// Exporting a variable
export const PI = 3.14159;

// Exporting a class
export class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    return `Hello, my name is ${this.name}`;
  }
}

// Importing and using the function, variable, and class
import { greet, PI, Person } from './10_modules.js';

console.log(greet("Alice")); // Hello, Alice!
console.log(PI); // 3.14159

const person1 = new Person("John", 30);
console.log(person1.greet()); // Hello, my name is John

// Default export
const defaultExport = "This is the default export";
export default defaultExport;

// Importing the default export
import defaultExport from './10_modules.js';
console.log(defaultExport); // This is the default export
