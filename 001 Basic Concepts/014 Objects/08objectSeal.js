// Example: Using Object.seal() to prevent adding or removing properties, but allow modification

const user = {
    username: "john_doe",
    email: "john@example.com"
};

Object.seal(user);
user.email = "john.doe@example.com"; // Allowed: modifying existing property
user.age = 25; // Not allowed: adding new property

console.log(user); // Output: { username: "john_doe", email: "john.doe@example.com" }
