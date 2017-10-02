
function onClick() {
    let clicks = document.getElementById('likes').nextSibling
    let likes = parseInt(clicks.textContent) + 1;
    clicks.textContent = likes;


};
let buttons = document.getElementById("likebutton");

buttons.addEventListener("click", onClick);





// get elements by class name, and convert to an array using Array.from()
// Foreach element in the array,
// attach an event listener for a "click" event

// When the user clicks on a configured button,
// Find the current count *next to* the clicked button
// Increment it
// Set it back

// #tableflip
