let ele = document.querySelector('h1').innerText;
console.log(ele);

let ele1 = document.querySelector('h1').textContent;
console.log(ele1);


var target = document.querySelector('.one');
var newE = `<b>BOLD TEXT</b>`;
target.insertAdjacentHTML("beforebegin",newE);
console.log(target);

// beforebegin
// beforeend
// afterend
// afterbegin
