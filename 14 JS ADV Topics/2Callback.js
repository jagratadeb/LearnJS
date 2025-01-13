// Define a constructor function for creating Person objects
function Person(name, age) {
    this.name = name;
    this.age = age;
}

// Create a new instance of Person using the 'new' keyword
let john = new Person("John", 25);
console.log(john.name); // Output: John
console.log(john.age);  // Output: 25

// Define a function that simulates an asynchronous operation using a callback
function asyncOperation(callback) {
    setTimeout(() => {
        let success = true; // This is just a placeholder for your actual condition

        if (success) {
            callback(null, "Operation was successful!");
        } else {
            callback("Operation failed.");
        }
    }, 2500); // 2.5 -second delay
}

// Handling the callback
asyncOperation((error, message) => {
    if (error) {
        console.error(error); // Output: Operation failed.
    } else {
        console.log(message); // Output: Operation was successful!
    }
});
