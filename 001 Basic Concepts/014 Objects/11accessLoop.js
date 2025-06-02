let person = {
    name: "Jagrata",
    age: 20,
}
console.log(person);

console.log("\nPrint using for-in loop");
for (let key in person) {
    console.log(key, ":", person[key]);
}