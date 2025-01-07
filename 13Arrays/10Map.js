let arr1 = [1, 2, 3, 4, 5];

// Map - creating a new array by applying a function to each element
// The `map` method creates a new array by applying a function to each element of the original array.
// In this case, the function adds 1 to each element if it's a number, otherwise it appends '1' to the string.
// The original array remains unchanged.
let mappedArray = arr1.map(x => typeof x === 'number' ? x + 1 : x + '1');
console.log("Mapped Array:", mappedArray); // [2, 3, 4, 5, 6]
