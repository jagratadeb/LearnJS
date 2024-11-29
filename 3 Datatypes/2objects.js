// Objects

const person = {
    name: 'John Doe',
    age: 40,
    isHuman: true
};

console.log(person);
console.log(person["name"]);
console.log(person['isHuman']);


// Add, modify and delete the data
person.email = "xyz@gmai.com";
person.age = 41;
delete person["isHuman"]

console.log(person);

// Access an object 
// 1. console.log(person.name);  (with dot notation)
// 2. console.log(person['age']); (with bracket notation)