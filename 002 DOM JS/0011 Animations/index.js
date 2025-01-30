// Function to animate an element
function animateIt() {
  // Initialize position variable
  let pos = 0;
  // Get the element with the ID "inside"
  const ele = document.getElementById("inside");
  // Set an interval to call the frame function every 10 milliseconds
  const id = setInterval(frame, 10);

  // Function to update the position of the element
  function frame() {
    // If the position reaches 350, clear the interval to stop the animation
    if (pos == 350) {
      clearInterval(id);
    } else {
      // Increment the position
      pos++;
      // Update the element's left and top position
      ele.style.left = pos + "px";
      ele.style.top = pos + "px";
    }
  }
}
