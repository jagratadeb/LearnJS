let person = {
    name: "Jagrata",
    greet: function () {
        console.log(`Hello, I am ${this.name}`)
    }
}
person.greet();