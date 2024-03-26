let hamburger = document.querySelector('.hamburger');
let upper = document.querySelector('.upper');
let middle = document.querySelector('.middle');
let lower = document.querySelector('.lower');

function animateHamburger() {
    upper.classList.toggle('upper-active');
    middle.classList.toggle('middle-active');
    lower.classList.toggle('lower-active');
}

hamburger.onclick = () => animateHamburger();