//MENU
const hamburger = document.querySelector('.hamburger'),
    menu = document.querySelector('.menu'),
    closeMenu = document.querySelector('.menu__close');
    menuLink = document.querySelectorAll('.menu__link');

hamburger.addEventListener('click', () => {
    menu.classList.add('active');
});

closeMenu.addEventListener('click', () => {
    menu.classList.remove('active');
});

menuLink.forEach(element => {
    element.addEventListener('click', () => {
        menu.classList.remove('active');
    });
});

// Button up

const pageUp = document.querySelector('.pageup');

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        pageUp.style.display = "block";
    } else {
        pageUp.style.display = "none";
    }
  }