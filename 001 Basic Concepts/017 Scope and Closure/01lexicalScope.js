// Example: Lexical Scope in JavaScript
// Demonstrating how inner functions have access to outer function variables

function outerFunction() {
    let outerVar = 'I am from outer scope';
    function innerFunction() {
        // innerFunction can access outerVar due to lexical scope
        console.log(outerVar);
    }
    innerFunction();
}

outerFunction(); // Output: I am from outer scope
