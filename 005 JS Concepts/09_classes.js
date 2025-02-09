// Classes in JavaScript

// Class declaration
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    return `Hello, my name is ${this.name}`;
  }
}

// Creating an instance of the class
const person1 = new Person("John", 30);
console.log(person1.greet()); // Hello, my name is John

// Class inheritance
class Student extends Person {
  constructor(name, age, major) {
    super(name, age);
    this.major = major;
  }

  study() {
    return `${this.name} is studying ${this.major}`;
  }
}

const student1 = new Student("Alice", 22, "Computer Science");
console.log(student1.greet()); // Hello, my name is Alice
console.log(student1.study()); // Alice is studying Computer Science

// Static methods
class MathUtil {
  static add(a, b) {
    return a + b;
  }
}

console.log(MathUtil.add(2, 3)); // 5

// Getters and setters
class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  get area() {
    return this.width + this.height;
  }

  set area(value) {
    this.width = value / 2;
    this.height = value / 2;
  }
}

const rect = new Rectangle(10, 20);
console.log(rect.area); // 30
rect.area = 40;
console.log(rect.width); // 20
console.log(rect.height); // 20
