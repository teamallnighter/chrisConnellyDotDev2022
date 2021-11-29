const scrolly = setInterval(scroll1, 10000);
function scroll1() {
    setTimeout(function () {
        const scrollMe = document.querySelector('.scrollDown');
        scrollMe.classList.add("animate__wobble");
        console.log('Added Wiggle');
        setTimeout(function () {
            scrollMe.classList.remove("animate__wobble");
            console.log('Removed Wobble');
        }, 5000);
    }, 5000);
}