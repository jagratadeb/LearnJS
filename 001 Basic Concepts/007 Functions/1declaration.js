// Function declaration
function add(a, b) {
  return a + b;
}
console.log("add(5, 3) =", add(5, 3)); // 8


function subtract(a,b){
  return a-b;
}
console.log("subtract(10, 5) =",subtract(10,5)); // 5


function sumUpto(n){
    let sum = 0;
    for(let i = 1; i <= n; i++){
      sum += i;
    }
    return sum;
}
console.log("Sum: ",sumUpto(4));