window.onscroll = function () {
    var currentScrollPos = window.pageYOffset;
    if (currentScrollPos > 5) {
        document.getElementById("nav-scroll").style.display = "initial";
    } else {
        document.getElementById("nav-scroll").style.display = "none";
    }
}

if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    document.getElementById("nav-scroll").style.backgroundColor = "white";
} else {
    document.getElementById("nav-scroll").style.backgroundColor = "transparent";
}