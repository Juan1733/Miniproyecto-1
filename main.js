//Evento click en el menu

const hamburger = document.querySelector('.hamburger');
const mobile_menu = document.querySelector('.mobile-menu') 

hamburger.addEventListener('click', () => {
    mobile_menu.classList.toggle('is-open');
});

// Carrusel de fotos

let counter = 1;
setInterval(() => {
    document.getElementById('radio' + counter).checked = true;
    counter++;
    if (counter > 4) {
        counter = 1;
    }
}, 5000);