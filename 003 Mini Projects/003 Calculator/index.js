let input = document.getElementById("input");
let button = document.querySelectorAll("button");

button.forEach((element) => {
  element.addEventListener("click", (e) => {
    if (e.target.textContent === "C") {
      input.textContent = " ";
    } else if (e.target.textContent === "X") {
      input.textContent = input.textContent.slice(0, -1);
    } else if (e.target.textContent === "=") {
      input.textContent = eval(input.textContent);
    } else {
      input.textContent += e.target.textContent;
    }
  });
});
