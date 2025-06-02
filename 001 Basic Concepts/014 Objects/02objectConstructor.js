let car = new Object();

car.make = "Lamborghini";
car.model = "Aventador";
car.year = 2021;
car.start = () => {
    console.log("The start engine has started.")
}

console.log(car)
car.start();