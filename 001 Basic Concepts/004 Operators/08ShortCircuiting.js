// Logical OR (||)
let result = "" || "Guest" || null || 23;
console.log(result);

let result2 = undefined || 0 || false || null || -0 || 0n;
console.log(result2);


// Logical AND (&&)
let result3 = "JD" && true && undefined && 100;
console.log(result3);

let isAuthenticated = true;
let user = "Jagrata Deb";
let result4 = isAuthenticated && user;
console.log(result4);


// Nullish Coalescing
// returns the right hand side value only if the left side is null or undefined.
let result5 = null ?? "Default";
console.log(result5);

let result6 = undefined ?? "Right Hand Value";
console.log(result6);

let result7 = 0 ?? "JD";
console.log(result7);
