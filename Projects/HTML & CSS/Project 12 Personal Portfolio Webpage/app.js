const navbar = document.querySelector('#navbar');
const date = document.querySelector('#date');

// add fixed class to navbar
window.addEventListener('scroll', function () {
    if (window.pageYOffset > 80) {
        navbar.classList.add('navbar-fixed');
    } else {
        navbar.classList.remove('navbar-fixed');
    }
});

// add date
date.textContent = new Date().getFullYear();
