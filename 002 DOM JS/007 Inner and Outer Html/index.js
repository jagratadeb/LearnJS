let inner = document.querySelector("ul li:nth-child(1)");
inner.innerHTML = `>> Inner HTML working here <<`;
console.log(inner);

let outer = document.querySelector("#main-hero");
outer.outerHTML = ">> Outer HTML working here <<";
console.log(outer);

// The key difference between `innerHTML` and `outerHTML` lies in their scope: `innerHTML` retrieves or sets the HTML content within an element, excluding the element itself, while `outerHTML` includes the element along with its content.

// For example, if you have a `<div>` containing a paragraph, `innerHTML` will return just the paragraph's HTML, whereas `outerHTML` will return the entire `<div>` element along with the paragraph inside it.
