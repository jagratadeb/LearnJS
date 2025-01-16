let arr = [
    ["John", 30],
    ["Jane", 25],
    ["Bob", 40,20],
    ["Alice", 35],
    ["Charlie", 20]
];



// Printing a multidimensional array using nested for loops.
console.log(arr);

for(let i = 0; i < arr.length;i++){
    for(let j = 0; j < arr[i].length; j++){
        console.log(arr[i][j]);
    }
}

// Printing a multidimensional array using forEach loop.
arr.forEach(data => {
    data.forEach(
        ele => console.log(ele)
    )
});