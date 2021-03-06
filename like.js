
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


$(".textarea").keyup(function() {
    let aTweet = $(".textarea").val();
    let newCount = 140 - aTweet.length;
    
    $("#counter").text(newCount);
    if (parseInt($("#counter").text()) < 0) {
        $("#counter").css("color", "red");
    }
    else {
        $("#counter").css("color", "black");
    }
})

$(".submit").click(function(event) {
    let tweet = $(".textarea").val();
    if(tweet.trim() == '') return;
    if(tweet.length > 140) {
        alert("Tweet is over 140 characters.");
        return;
    }
    $(".tweets").prepend("<div class=\"panel panel-default\"><div class=\"panel-body\"><p>" +
                        "<b>Tweets &#8226; Tweets &amp; Replies &#8226; Media</b></p><hr>" +
                        "<img src=\"darksouls.jpg\" alt=\"Dark Souls\" class=\"img-circle\" width= 50px height= 50px>" +
                        "<h3><b>Bennie O'Neal</b></h3><p>" +
                        tweet +
                        "</p>" +
                        "<i class=\"glyphicon glyphicon-heart increment\"></i><span>0</span><i class=\"glyphicon glyphicon-refresh increment\"></i>" +
                        "<span>0</span></div></div>");
    $(".textarea").val("");
    $("#counter").text("140");
});
$(function() {
    $(document).on('click', '.increment', function() {
        let currentCount = $(this).next().text();
        let newCount = parseInt(currentCount) + 1;
        $(this).next().text(newCount);
    })
})