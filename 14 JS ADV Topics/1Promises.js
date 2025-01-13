// Define a constructor function for creating Item objects
function Item(name, value) {
    this.name = name;
    this.value = value;
}

// Create a new instance of Item using the 'new' keyword
const item1 = new Item("Item1", 25);
console.log(item1.name); // Output: Item1
console.log(item1.value); // Output: 25

// Create a new Promise
const promise = new Promise((resolve, reject) => {
    // Simulate an asynchronous operation using setTimeout
    setTimeout(() => {
        let success = false; // Placeholder for actual condition

        if (success) {
            resolve("Operation was successful!");
        } else {
            reject("Operation failed.");
        }
    }, 2500); // 2.5 -second delay
});


// Handling the Promise
promise.then((message) => {
    console.log(message); // Output: Operation was successful!
}).catch((error) => {
    console.error(error); // Output: Operation failed.
});



// A Promise in JavaScript is an object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value.


//  It has three states: 
// i. pending (initial state) 
// ii. fulfilled (operation completed successfully)
// iii. rejected (operation failed)

// Promises provide a cleaner way to handle asynchronous operations compared to callbacks. Wre create a Promise using the Promise constructor, which takes an executor function with resolve and reject parameters. The then method handles the resolved value, while the catch method handles any errors.
