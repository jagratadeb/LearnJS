const student = {
    name: 'John',
    age: 22,
    major: "Computer Science",
    greet: function() {
        console.log(`Hello, my name is ${this.name}.`);
    }
};

console.log(student.name); // Outputs: John
student.greet(); // Outputs: Hello, my name is John.