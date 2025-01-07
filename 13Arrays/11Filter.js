let arr1 = [1, 2, 3, 4, 5];

// Filter - creating a new array with elements that pass a test
// The `filter` method creates a new array with all elements that pass the test implemented by the provided function.
// In this case, the test checks if the element is a number.
// Only elements that are numbers are included in the new array.
// The original array remains unchanged.
let filteredArray = arr1.filter(x => typeof x === 'number');
console.log("Filtered Array:", filteredArray); // [1, 2, 3, 4, 5]
