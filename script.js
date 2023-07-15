const nav = document.querySelector('.nav-links');
const menu = document.querySelector('.menu');

menu.addEventListener('click', () => {
    nav.classList.toggle('hidden-mobile')
})