const hamburger = document.querySelector('.hamburger');
const mobile_menu = document.querySelector('.mobile-menu')

hamburger.addEventListener('click', () => {
    mobile_menu.classList.toggle('is-open');
});