function toggleMenu() {
    const burger = document.getElementById('menuToggle');
    const menu = document.getElementById('mobileMenu');
    burger.classList.toggle('active');
    menu.classList.toggle('open');
}

function closeMenu() {
    const burger = document.getElementById('menuToggle');
    const menu = document.getElementById('mobileMenu');
    burger.classList.remove('active');
    menu.classList.remove('open');
}