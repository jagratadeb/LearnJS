// Style for the heading
let head = document.getElementsByTagName("h1")[0];
head.style.border = "5px solid black";
head.style.width = "max-content";
head.style.height = "max-content";
head.style.padding = "15px";

// style for the container class
let container = document.querySelector(".container");
container.style.display = "flex";
container.style.height = "90vh";
container.style.flexDirection = "column";
container.style.justifyContent = "center";
container.style.alignItems = "center";

// btn-logs
let btnLogs = document.querySelector(".btn-logs");
btnLogs.style.display = "flex";
btnLogs.style.flexDirection = "column";
btnLogs.style.justifyContent = "center";
btnLogs.style.alignItems = "center";

// Button container
let btnContainer = document.getElementsByClassName("btn-container")[0];
btnContainer.style.display = "flex";
btnContainer.style.flexDirection = "row";
btnContainer.style.justifyContent = "space-between";
btnContainer.style.alignItems = "center";
btnContainer.style.marginTop = "30px";
btnContainer.style.width = "450px";

// style for the buttons
let startBtn = document.querySelector("#start-btn");
let stopBtn = document.getElementById("stop-btn");

startBtn.style.backgroundColor = "green";
startBtn.style.color = "white";
startBtn.style.padding = "15px";
startBtn.style.fontSize = "18px";
startBtn.style.border = "none";
startBtn.style.width = "49%";

stopBtn.style.backgroundColor = "red";
stopBtn.style.color = "white";
stopBtn.style.padding = "15px";
stopBtn.style.fontSize = "18px";
stopBtn.style.border = "none";
stopBtn.style.width = "49%";

// log-state-container
let logStateContainer = document.getElementsByClassName(
  "log-state-container"
)[0];
logStateContainer.style.width = "550px";
logStateContainer.style.margin = "25px";
logStateContainer.style.display = "flex";
logStateContainer.style.flexDirection = "row";
logStateContainer.style.flexDirection = "center";
logStateContainer.style.justifyContent = "center";

// style for the log
let log = document.getElementById("log");
log.style.width = "100%";
log.style.backgroundColor = "orange";
log.style.height = "50px";
log.style.padding = " 10px";
log.textContent = "KEY LOGS";

// style for the state
let state = document.getElementById("state");
state.style.width = "100%";
state.style.backgroundColor = "yellow";
state.style.height = "50px";
state.style.padding = " 10px";
state.textContent = "STATUS";


// functionality of the buttons
startBtn.addEventListener("click", () => {
  document.addEventListener("keydown", handleDown);
  document.addEventListener("keyup", handleUp);
});

stopBtn.addEventListener("click", () => {
  log.textContent = "KEY LOGS";
  state.textContent = "STATUS";
});

function handleDown(e) {
  log.textContent = `Key ${e.key} is being pressed`;
  state.textContent = "Key is down";
}

function handleUp(e) {
  log.textContent = `Key ${e.key} was pressed`;
  state.textContent = "Key is Up";
}
