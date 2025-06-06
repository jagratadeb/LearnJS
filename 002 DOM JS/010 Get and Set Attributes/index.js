let hero = document.querySelector("#hero");
console.log(hero.getAttribute("style"));

hero.setAttribute("style", "color:white;background-color:#1b1b1b;padding:15px");

console.log(hero.outerHTML);

for (ele of hero.attributes) {
  console.log(ele, "value", ele.value);
}
// id 'value' 'hero'
// about 'value' 'hello'
// style 'value' 'color:white;background-color:#1b1b1b;padding:15px'
