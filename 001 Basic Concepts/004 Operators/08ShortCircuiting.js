// Logical OR (||)
let result = "" || "Guest" || null || 23;
console.log(result);

let result2 = undefined || 0 || null;
console.log(result2);


// Logical AND (&&)
let result3 = "JD" && true && undefined && 100;
console.log(result3);

let isAuthenticated = true;
let user = "Jagrata Deb";
let result4 = isAuthenticated && user;
console.log(result4);


// Nullish Coalescing
let result5 = null ?? "Default";
console.log(result5);

let result6 = 0 ?? "JD";
console.log(result6);
