// Get the element with id 'container'
let ele = document.getElementById("container");

function onMouseDown() {
  // Change the background color to black when the mouse button is pressed
  ele.style.backgroundColor = "#1b1b1b";
}

function onMouseUp() {
  // Change the background color to white when the mouse button is released
  ele.style.backgroundColor = "white";
}
