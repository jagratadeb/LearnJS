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

// dot notation
console.log(car)
car.start();
car.stop();


// bracket notation
console.log(car["make"]);
console.log(car["model"]);
console.log(car["year"]);
car["start"]();
car["stop"]();