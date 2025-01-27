let arr = [1, 2, 3, 4, 5];

console.log("Array Operations");

// Using for loop
console.log("Using for loop:");
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

// Using for...of loop
console.log("Using for...of loop:");
for (let element of arr) {
    console.log(element);
}

// Using forEach method
console.log("Using forEach method:");
arr.forEach(function(element) {
    console.log(element);
});

// Using while loop
console.log("Using while loop:");
let i = 0;
while (i < arr.length) {
    console.log(arr[i]);
    i++;
}

// Using do...while loop
console.log("Using do...while loop:");
let j = 0;
do {
    console.log(arr[j]);
    j++;
} while (j < arr.length);

// Using map method
console.log("Using map method:");
arr.map(function(element) {
    console.log(element);
});
