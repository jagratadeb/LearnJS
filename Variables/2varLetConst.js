var x = 45;
let y = 23;
const z = null;

{
  var x = "for var"; // This will override the previous 'var x'
  console.log(x); // Output: 'for var'
}
console.log(x); // Output: 'for var'

{
  let y = "for let"; // This 'y' is limited to this block scope
  console.log(y); // Output: 'for let'
}
console.log(y); // Output: 23

{
  const z = "for const"; // This 'z' is limited to this block scope
  console.log(z); // Output: 'for const'
}
console.log(z); // Output: null

const example = 1;
console.log(example);

// example = 5
// console.log(example)  // cannot reassign a value in constant
