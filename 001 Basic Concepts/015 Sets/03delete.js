// Delete an item from a Set in JavaScript
let mySet = new Set();
mySet.add(1);
mySet.add(2);
mySet.add(3);
mySet.add(4);
mySet.add(4);
mySet.add(5);
mySet.add("numbers");

console.log(mySet);

mySet.delete(2); // Deletes the value 2 from the Set
console.log("After deleting 2:", mySet);