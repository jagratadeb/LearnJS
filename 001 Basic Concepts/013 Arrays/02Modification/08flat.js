let arr = ["spiderman", "superman", ['batman', 'ironman', ["thor"]], "hulk"]
console.log(arr);

let flatArray0 = arr.flat(0);
let flatArray1 = arr.flat(1);
let flatArray2 = arr.flat(2);
let flatArrayInfinity = arr.flat(Infinity);

console.log(flatArray0);
console.log(flatArray1);
console.log(flatArray2);
console.log(flatArrayInfinity);