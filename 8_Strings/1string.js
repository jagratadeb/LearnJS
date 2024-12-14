let str1 = "Hello";
let str2 = "World";

console.log("String Operations");

// Concatenation - combining two strings
let concatenated = str1 + " " + str2;
console.log("Concatenated String:", concatenated); // "Hello World"

// Length - getting the number of characters in a string
console.log("Length of str1:", str1.length); // 5

// Accessing characters - getting a specific character from a string
console.log("First character of str1:", str1.charAt(0)); // "H"
console.log("Last character of str1:", str1.charAt(str1.length - 1)); // "o"

// Substring - extracting a portion of a string

console.log("Substring of str1 (0, 3):", str1.substring(0, 3)); // "Hel"

// Slice - extracting a portion of a string (similar to substring)
console.log("Slice of str1 (0, 3):", str1.slice(0, 3)); // "Hel"

// Replace - replacing a part of the string with another string
let newStr = str1.replace("Hello", "Hi");
console.log("Replaced String:", newStr); // "Hi"

// Uppercase - converting all characters to uppercase
console.log("Uppercase str1:", str1.toUpperCase()); // "HELLO"

// Lowercase - converting all characters to lowercase
console.log("Lowercase str2:", str2.toLowerCase()); // "world"

// Split - splitting a string into an array of substrings
let splitStr = concatenated.split(" ");
console.log("Split String:", splitStr); // ["Hello", "World"]

// Trim - removing whitespace from both ends of a string
let strWithSpaces = "   Hello World   ";
console.log("Trimmed String:", strWithSpaces.trim()); // "Hello World"
