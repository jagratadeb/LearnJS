let body = document.querySelector('body');
let para = document.querySelector('.current-color');

let applyColor = () => {
    let receivedColor = document.querySelector('input').value;
    body.style.backgroundColor = receivedColor;
    para.textContent = "Color: " + receivedColor.toUpperCase();
};

let randomColor = () => {
    let randomHex = "#" + Math.floor(Math.random() * 16777215).toString(16);
    body.style.backgroundColor = randomHex;
    para.textContent = "Color: " + randomHex.toUpperCase();
};