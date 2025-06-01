// Example: Splitting a string into an array using split() in JavaScript

// Declare a string of numbers separated by commas
let str = "1,2,3,4,5";

// Split - convert the string into an array using ',' as the separator
let splitArray = str.split(','); // ['1', '2', '3', '4', '5']
console.log("Split Array:", splitArray); // Output: ["1", "2", "3", "4", "5"]

// Use forEach to print each element of the resulting array
splitArray.forEach(element => {
    console.log(element);
});