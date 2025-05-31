let str1 = "Hello";
let str2 = "World";

console.log("String Operations");

// Concatenation - combining two strings
let concatenated = str1 + " " + str2;
console.log("Concatenated String:", concatenated); // "Hello World"


// Accessing characters - getting a specific character from a string
console.log("First character of str1:", str1.charAt(0)); // "H"
console.log("Last character of str1:", str1.charAt(str1.length - 1)); // "o"


// indexOf() - returns the index of the first occurrence of a value
console.log("Index of 'o':", concatenated.indexOf('o')); // 4


// lastIndexOf() - returns the index of the last occurrence of a value
console.log("Last index of 'o':", concatenated.lastIndexOf('o')); // 7


// includes() - checks if a string contains a specified value
console.log("Includes 'World':", concatenated.includes("World")); // true


// startsWith() - checks if a string starts with a specified value
console.log("Starts with 'Hello':", concatenated.startsWith("Hello")); // true


// endsWith() - checks if a string ends with a specified value
console.log("Ends with 'World':", concatenated.endsWith("World")); // true


// substring() - extracting a portion of a string
console.log("Substring of str1 (0, 3):", str1.substring(0, 3)); // "Hel"


// slice() - extracting a portion of a string (similar to substring)
console.log("Slice of str1 (0, 3):", str1.slice(0, 3)); // "Hel"


// match() - retrieves the result of matching a string against a regex
console.log("Match 'l+':", str1.match(/l+/g)); // [ 'll' ]


// replace() - replacing a part of the string with another string
let newStr = str1.replace("Hello", "Hi");
console.log("Replaced String:", newStr); // "Hi"


// replaceAll() - replaces all occurrences of a substring
console.log("ReplaceAll 'l' with 'x':", str1.replaceAll('l', 'x')); // "Hexxo"


// toUpperCase() and toLowerCase() - converting all characters to uppercase & lowercase
console.log("Uppercase str1:", str1.toUpperCase() + " " + str2.toLowerCase()); // "HELLO world"


// repeat() - repeats the string a specified number of times
console.log("Repeat str1 3 times:", str1.repeat(3)); // "HelloHelloHello"


// padStart() - pads the string at the start
console.log("PadStart:", str1.padStart(10, '*')); // "*****Hello"


// padEnd() - pads the string at the end
console.log("PadEnd:", str1.padEnd(10, '-')); // "Hello-----"


// split() - splitting a string into an array of substrings
let splitStr = concatenated.split(' ');
console.log("Split String:", splitStr); // ["Hello", "World"]


// trim() - removing whitespace from both ends of a string
let strWithSpaces = "   Hello World   ";
console.log("Trimmed String:", strWithSpaces.trim()); // "Hello World"


// valueOf() - returns the primitive value of a String object
console.log("ValueOf str1:", str1.valueOf()); // "Hello"


// charAt() - already shown above
// charCodeAt() - returns the Unicode of the character at a specified index
console.log("charCodeAt(0):", str1.charCodeAt(0)); // 72


// fromCharCode() - static method to create a string from Unicode values
console.log("fromCharCode(72,101,108,108,111):", String.fromCharCode(72, 101, 108, 108, 111)); // "Hello"
