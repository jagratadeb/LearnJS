// Select the first <div> element in the document
const div = document.getElementsByTagName('div')[0];

// Add a click event listener to the <div> element
div.addEventListener('click', (event) => {
    // Check if the clicked element is a <button>
    if (event.target.tagName == 'BUTTON') {
        console.log('Button was clicked.');
    }
    // Check if the clicked element is a <span>
    else if (event.target.tagName == 'SPAN') {
        console.log('Span was clicked.');
    }
});
