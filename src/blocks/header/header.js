const burgerBtn = document.querySelector('.header__burger')
const mobileMenu = document.querySelector('.header__mobile-menu')

burgerBtn.addEventListener('click', () => {
    burgerBtn.classList.toggle('header__burger_active')
    mobileMenu.classList.toggle('header__mobile-menu_active')
})