let x = 10;
let y = 5;

console.log("Assignment Operators");
console.log("Initial value of x =", x); // 10
console.log("Initial value of y =", y); // 5

x += y;
console.log("x += y => x =", x); // 15

x -= y;
console.log("x -= y => x =", x); // 10

x *= y;
console.log("x *= y => x =", x); // 50

x /= y;
console.log("x /= y => x =", x); // 10

x %= y;
console.log("x %= y => x =", x); // 0

x **= y;
console.log("x **= y => x =", x); // 0 (Note: since x was 0 after the modulo operation, 0 ** 5 is still 0)

x = 10;
y = 2;

x <<= y;
console.log("x <<= y => x =", x); // 40 (Left shift)

x >>= y;
console.log("x >>= y => x =", x); // 10 (Right shift)
