// Example: Iterating over a Map
let userMap = new Map([
    ['name', 'John'],
    ['city', 'New York']
]);
for (let [key, value] of userMap) {
    console.log(`${key}: ${value}`);
}
// Output:
// name: John
// city: New York
