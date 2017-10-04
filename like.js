
//     let buttons = Array.from(document.getElementsByClassName("glyphicon"));
//     buttons.forEach(button => {
//         button.addEventListener("click", e => {
//             let currentNum = button.nextSibling.textContent.trim()
//             let likes = parseInt(currentNum) + 1;
//             button.nextSibling.textContent = likes;
//     })
    


// })


// get elements by class name, and convert to an array using Array.from()
// Foreach element in the array,
// attach an event listener for a "click" event

// When the user clicks on a configured button,
// Find the current count *next to* the clicked button
// Increment it
// Set it back

// #tableflip

$(function() {
    $(".increment").click(function(event) {
        let currentCount = $(this).next().text();
        let newCount = parseInt(currentCount) + 1;
        $(this).next().text(newCount);
    })
})
