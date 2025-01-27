const body = document.getElementsByTagName('body')[0];

const div = document.getElementsByTagName('div')[0];

const span = document.getElementsByTagName('span')[0];

const button = document.getElementsByTagName('button')[0];


body.addEventListener('click',(event) => {
    event.stopPropagation();
    console.log("Body was clicked.")
})
div.addEventListener('click',(event) => {
    event.stopPropagation();
    console.log("div was clicked.")
})
span.addEventListener('click',(event) => {
    event.stopPropagation();
    console.log("span was clicked.")
})
button.addEventListener('click',(event) => {
    event.stopPropagation();
    console.log("button was clicked.")
})