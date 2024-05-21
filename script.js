//auto typed.js functionality
var typed = new Typed("#auto-typed",{
    strings:["Web Enthusiast","Tech Geek" ],
    typeSpeed:50,
    backSpeed:50,
    loop:true,
    smartBackspace: true
});

//reveal divs animation

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

//hamburger

document.addEventListener("DOMContentLoaded", function () {
    var hamburger = document.querySelector(".hamburger");
    var navLinks = document.querySelector(".nav-links");

    hamburger.addEventListener("click", function () {
        navLinks.style.display = (navLinks.style.display === "block") ? "none" : "block";
    });
});


openHam.addEventListener('click', () => hamburgerEvent("flex", "block", "none"));
closeHam.addEventListener('click', () => hamburgerEvent("none", "none", "block"));