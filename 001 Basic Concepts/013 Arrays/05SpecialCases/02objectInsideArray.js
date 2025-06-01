// Define an array of objects, each representing a person with id, name, and age properties
let arr = [
    { id: 1, name: "John", age: 25 },
    { id: 2, name: "Jane", age: 30 },
];

// Loop through each element in the array using a for...of loop for better readability
for (let person in arr) {
    // Log the name property of each person object to the console
    console.log(arr[person]);
}