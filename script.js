var typed = new Typed("#auto-typed",{
    strings:["Web Enthusiast","Tech Geek" ],
    typeSpeed:50,
    backSpeed:50,
    loop:true,
    smartBackspace: true
});

document.addEventListener("DOMContentLoaded", function () {
    var breadcrumb = document.querySelector(".breadcrumb");
    var navLinks = document.querySelector("nav ul");

    breadcrumb.addEventListener("click", function () {
        if (navLinks.style.display === "block") {
            navLinks.style.display = "none";
        } else {
            navLinks.style.display = "block";
        }
    });
});

window.addEventListener('scroll',reveal);
function reveal() {
    var reveals = document.querySelectorAll('.reveal');
    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var revealTop = reveals[i].getBoundingClientRect().top;
        var revealPoint = 150;
        if (revealTop < windowHeight - revealPoint) {
            reveals[i].classList.add('active');
        } else {
            reveals[i].classList.remove('active');
        }
    
    }
}