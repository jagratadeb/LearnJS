"use strict";

// Example of strict mode
function example() {
    // This will cause an error in strict mode
    // because x is not declared
    x = 10;
    console.log(x);
}

example();