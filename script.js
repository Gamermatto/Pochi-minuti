// Menu mobile
const menuToggle = document.querySelector('.menu-toggle');
const mainNav = document.querySelector('.main-nav');

menuToggle.addEventListener('click', () => {
    mainNav.classList.toggle('active');
    document.body.classList.toggle('nav-open');
});

// Caricamento articoli
document.addEventListener('DOMContentLoaded', () => {
    // Aggiungi eventuali funzioni di caricamento dinamico
    console.log('Sito pronto');
});