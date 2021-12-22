const toggleMenu = document.querySelector('.btn-menu');
const navMenu = document.querySelector('nav .nav-menu');

toggleMenu.addEventListener('click', function () {
    navMenu.classList.toggle("open");
})