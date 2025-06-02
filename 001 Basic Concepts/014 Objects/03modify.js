let car = {
    make: 'Lamborghini',
    model: 'Aventador',
    year: 2021,
    start: function () {
        console.log('The car engine has started.');
    },
    stop: () => {
        console.log("The car has stopped.")
    }
}

// Original Object
console.log(car)


// Modified Object
car.make = "Bugatti";
car["model"] = "Chiron";
console.log(car)

// Add more key-value pair
car["color"] = "blue";
console.log(car)

// Delete a key-value pair
delete car["color"];
console.log(car)