// Objects in JavaScript

// Creating an object
const person = {
  name: "John",
  age: 30,
  isStudent: true,
  greet: function() {
    return `Hello, my name is ${this.name}`;
  }
};

// Accessing object properties
console.log(person.name); // John
console.log(person.age); // 30
console.log(person.isStudent); // true

// Calling object methods
console.log(person.greet()); // Hello, my name is John

// Adding properties to an object
person.city = "New York";
console.log(person.city); // New York

// Deleting properties from an object
delete person.isStudent;
console.log(person.isStudent); // undefined

// Object destructuring
const { name, age, city } = person;
console.log(name); // John
console.log(age); // 30
console.log(city); // New York

// Nested objects
const student = {
  name: "Alice",
  age: 22,
  address: {
    street: "123 Main St",
    city: "Los Angeles",
    zip: "90001"
  }
};

console.log(student.address.city); // Los Angeles

// Merging objects
const additionalInfo = { major: "Computer Science", year: "Senior" };
const studentInfo = { ...student, ...additionalInfo };
console.log(studentInfo);
