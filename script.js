let menu = document.querySelector('.main-nav__list');
let burgerBtn = document.querySelector('.header__menu-icon');
let navLinks = document.querySelectorAll('.main-nav__link');

burgerBtn.addEventListener('click', () => {
    if(!menu.classList.contains('active')) {
        menu.classList.add('active');
        burgerBtn.src = 'assets/svg/icon-close.svg';
    } else {
        menu.classList.remove('active');
        burgerBtn.src = 'assets/svg/icon-burger-menu.svg';
    }
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        menu.classList.remove('active');
        burgerBtn.src = 'assets/svg/icon-burger-menu.svg';
    });
});

document.addEventListener('keydown', function(evt) {
    if(evt.code === 'Escape') {
        menu.classList.remove('active');
        burgerBtn.src = 'assets/svg/icon-burger-menu.svg';
    }
});
