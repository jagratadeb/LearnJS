// Objects

const person = {
    name: 'John Doe',
    age: 40,
    isHuman: true,
    func: function(){
        console.log('Hello, I am a function!');
        return;
    }
};


console.log(person);

// Log specific properties of the person object
console.log(person["name"]);    // Output: John Doe
console.log(person['isHuman']); // Output: true

// Add, modify, and delete properties
person.email = "xyz@gmail.com"; // Add a new property
person.age = 41;                // Modify an existing property
delete person["isHuman"];       // Delete a property

// Log the updated person object
console.log(person);

// Call the func method
person.func(); // Output: "Hello, I am a function!"

// Access an object 
// 1. console.log(person.name);  (with dot notation)
console.log(person.name); // Output: John Doe
// 2. console.log(person['age']); (with bracket notation)
console.log(person['age']); // Output: 41

// Iterate over the properties of the person object
for (key in person) {
    console.log(key, ':', person[key]);
}
