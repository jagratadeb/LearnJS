// Check whether the Set contains a value
let mySet = new Set();
mySet.add(1);
mySet.add(2);
mySet.add(3);
mySet.add(4);
mySet.add(4);
mySet.add(5);
mySet.add("numbers");

console.log(mySet);

console.log(mySet.has(1));
console.log(mySet.has('numbers'));