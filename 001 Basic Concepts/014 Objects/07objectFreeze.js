// Example: Using Object.freeze() to make an object immutable

const car = {
    brand: "Toyota",
    model: "Camry"
};

Object.freeze(car);
car.model = "Corolla"; // This will not change the model
car.year = 2022; // This will not add a new property

console.log(car); // Output: { brand: "Toyota", model: "Camry" }
