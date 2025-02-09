// Conditionals in JavaScript

const age = 18;

// If...else statement
if (age >= 18) {
  console.log("You are an adult.");
} else {
  console.log("You are a minor.");
}

// Switch statement
const fruit = "Apple";
switch (fruit) {
  case "Apple":
    console.log("You chose an apple.");
    break;
  case "Banana":
    console.log("You chose a banana.");
    break;
  default:
    console.log("Unknown fruit.");
}

// Ternary operator
const isAdult = age >= 18 ? "Yes" : "No";
console.log(isAdult); // Yes

// Logical operators
const hasID = true;
const canEnter = age >= 18 && hasID;
console.log(canEnter); // true

// Nullish coalescing operator
const userName = null;
const displayName = userName ?? "Guest";
console.log(displayName); // Guest

// Optional chaining
const user = {
  profile: {
    name: "Alice",
    age: 25
  }
};

console.log(user.profile?.name); // Alice
console.log(user.contact?.email); // undefined
