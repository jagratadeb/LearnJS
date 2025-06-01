let arr1 = [1, 2, 3, 4, 5];

// Splice - adding/removing elements from an array
// Syntax - startPosition,deleteCount, insert item1, insert item2.....
let newArr = arr1.splice(2, 1, 'a', 'b');
console.log("Array after splice:", arr1); // [1, 2, 'a', 'b', 4, 5]
console.log("Returns the deleted element:", newArr);
