let arr1 = [1, 2, 3, 4, 5];

// Reduce - reducing an array to a single value
// The `reduce` method applies a function against an accumulator and each element in the array (from left to right) to reduce it to a single value.
// In this case, the function adds each element to the accumulator if it's a number, starting with an initial value of 0.
// The final result is the sum of all numbers in the array.
// The original array remains unchanged.

// let reducedValue = arr1.reduce(
//   (acc, curr) => acc + (typeof curr === "number" ? curr : 0),
//   0
// );

let reducedValue = arr1.reduce(
  (accumulator, current) =>
    accumulator + (typeof current === "number" ? current : 0),
  0
);

console.log("Reduced Value:", reducedValue); // 15
