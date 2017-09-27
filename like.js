var clicks = document.getElementById();
function click() {
    clicks += 1;
    document.getElementById("likes").innerHTML = clicks;
};
let buttons = document.getElementById("likebutton");

buttons.addEventListener("click", click);
