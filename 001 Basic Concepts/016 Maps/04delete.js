// Example: Deleting a key-value pair from a Map
let userMap = new Map([
    ['name', 'John'],
    ['age', 30],
    ['city', 'New York']
]);
userMap.delete('age');
console.log(userMap); // Output: Map(2) { 'name' => 'John', 'city' => 'New York' }
