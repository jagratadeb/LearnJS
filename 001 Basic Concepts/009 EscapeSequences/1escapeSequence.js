console.log("Escape Sequences");

// Newline (\n) - new line
console.log("Hello\nWorld!");
// Output:
// Hello
// World!

// Tab (\t) - tab space
console.log("Hello\tWorld!");
// Output: Hello   World!

// Backslash (\\) - include backslash
console.log("Hello\\World!");
// Output: Hello\World!

// Single Quote (\') - include single quote
console.log('Hello\'s World!');
// Output: Hello's World!

// Double Quote (\") - include double quote
console.log("Hello\"World!");
// Output: Hello"World!

// Unicode (\uXXXX) - include Unicode character
console.log("Hello\u0020World!");
// Output: Hello World!

// Carriage Return (\r) - moves cursor to the beginning of the line
console.log("Hello\rWorld!");
// Output: World!

// Backspace (\b) - removes the previous character
console.log("Hello\bWorld!");
// Output: HellWorld!

// Form Feed (\f) - advances the paper feed (not visible in most consoles)
console.log("Hello\fWorld!");
// Output: Hello\fWorld!

// Vertical Tab (\v) - vertical tab (not visible in most consoles)
console.log("Hello\vWorld!");
// Output: Hello\vWorld!

// Null Character (\0) - null character
console.log("Hello\0World!");
// Output: Hello\0World!

// Hexadecimal (\xXX) - character with the given hex code
console.log("Hello\x57orld!");
// Output: HelloWorld!

// Template literal with escape sequences
console.log(`Line1\nLine2\tTabbed\"Quote\"`);
// Output:
// Line1
// Line2	Tabbed"Quote"
