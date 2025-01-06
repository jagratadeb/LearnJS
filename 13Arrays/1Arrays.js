let arr1 = [1, 2, 3, 4, 5];
let arr2 = [6, 7, 8, 9, 10];

console.log("Array Operations");

// Concatenation - combining two arrays
let concatenatedArray = arr1.concat(arr2);
console.log("Concatenated Array:", concatenatedArray); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// Length - getting the number of elements in an array
console.log("Length of arr1:", arr1.length); // 5

// Accessing elements - getting a specific element from an array
console.log("First element of arr1:", arr1[0]); // 1
console.log("Last element of arr1:", arr1[arr1.length - 1]); // 5

// Slice - extracting a portion of an array
console.log("Slice of arr1 (1, 3):", arr1.slice(1, 3)); // [2, 3]

// Push - adding elements to the end of an array
arr1.push(6);
console.log("Array after push:", arr1); // [1, 2, 3, 4, 5, 6]

// Pop - removing the last element from an array
let poppedElement = arr1.pop();
console.log("Popped Element:", poppedElement); // 6
console.log("Array after pop:", arr1); // [1, 2, 3, 4, 5]

// Shift - removing the first element from an array
let shiftedElement = arr1.shift();
console.log("Shifted Element:", shiftedElement); // 1
console.log("Array after shift:", arr1); // [2, 3, 4, 5]

// Unshift - adding elements to the beginning of an array
arr1.unshift(0);
console.log("Array after unshift:", arr1); // [0, 2, 3, 4, 5]

// Splice - adding/removing elements from an array
arr1.splice(2, 1, 'a', 'b');
console.log("Array after splice:", arr1); // [0, 2, 'a', 'b', 4, 5]

// Join - joining all elements of an array into a string
let joinedArray = arr1.join('-');
console.log("Joined Array:", joinedArray); // "0-2-a-b-4-5"


// Map - creating a new array by applying a function to each element
// Here, we add 1 to each element in the array
let mappedArray = arr1.map(x => typeof x === 'number' ? x + 1 : x + '1');
console.log("Mapped Array:", mappedArray); // [1, 3, 'a1', 'b1', 5, 6]
// The `map` method creates a new array by applying a function to each element of the original array. In this case, the function adds 1 to each element if it's a number, otherwise it appends '1' to the string. The original array remains unchanged.


// Filter - creating a new array with elements that pass a test
// Here, we filter out only the elements that are numbers
let filteredArray = arr1.filter(x => typeof x === 'number');
console.log("Filtered Array:", filteredArray); // [0, 2, 4, 5]
// The `filter` method creates a new array with all elements that pass the test implemented by the provided function. In this case, the test checks if the element is a number. Only elements that are numbers are included in the new array. The original array remains unchanged.


// Reduce - reducing an array to a single value
// Here, we sum up all the numbers in the array
let reducedValue = arr1.reduce((acc, curr) => acc + (typeof curr === 'number' ? curr : 0), 0);
console.log("Reduced Value:", reducedValue); // 11
// The `reduce` method applies a function against an accumulator and each element in the array (from left to right) to reduce it to a single value. In this case, the function adds each element to the accumulator if it's a number, starting with an initial value of 0. The final result is the sum of all numbers in the array. The original array remains unchanged.
