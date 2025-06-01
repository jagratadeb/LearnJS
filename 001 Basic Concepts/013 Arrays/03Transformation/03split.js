let str = "1,2,3,4,5";

// Split - splitting a string into an array of substrings
// The `split` method splits a string into an array of substrings based on a specified separator.
// In this case, the separator is a comma (',').
let splitArray = str.split(',');
console.log("Split Array:", splitArray);// ["1", "2", "3", "4", "5"]

let arr = splitArray.forEach(element => {
    console.log(element);
})