function onMouseDown() {
  // Get the element with id 'container'
  let ele = document.getElementById("container");

  // Change the background color to black when the mouse button is pressed
  ele.style.backgroundColor = "#1b1b1b";
}

function onMouseUp() {
  // Get the element with id 'container'
  let ele = document.getElementById("container");

  // Change the background color to white when the mouse button is released
  ele.style.backgroundColor = "white";
}
