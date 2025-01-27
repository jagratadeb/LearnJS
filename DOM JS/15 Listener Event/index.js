// Get the button element by its ID
let btn = document.getElementById("btn");

// Add a click event listener to the button
btn.addEventListener("click", func);

// Define the function to be executed on button click
function func() {
  // Get the container element by its ID
  let box = document.getElementById("container");

  // Check the current background color of the container
  if (box.style.backgroundColor === "white") {
    // If the background color is white, change it to black
    box.style.backgroundColor = "black";
  } else {
    // If the background color is not white, change it to white
    box.style.backgroundColor = "white";
  }
}
