let arr = [1, 2, 3, 4, 5];

// Find - finding the first element that satisfies a test
// The `find` method returns the first element in the array that satisfies the provided testing function.
// In this case, the function checks if the element is greater than 3.
let foundElement = arr.find(
    (x) => x>3
);

console.log(foundElement);