const buttons = document.querySelectorAll('.button');
const body = document.querySelector("body");

buttons.forEach(function(button) {
    button.addEventListener('click', function(e) {
        const color = e.target.id; // Get the id of the clicked button
        body.style.backgroundColor = color; // Set the background color to the id
    });
});