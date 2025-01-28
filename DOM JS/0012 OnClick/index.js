// Function to toggle the background color of the element with the ID "container"
const changeColour = () => {
  // Get the element with the ID "container"
  let ele = document.getElementById("container");
  // Check the current background color and toggle it
  if (ele.style.backgroundColor == "white") {
    // If the background color is white, change it to black
    ele.style.backgroundColor = "#1b1b1b";
  } else {
    // If the background color is not white, change it to white
    ele.style.backgroundColor = "white";
  }
};
