import '../../libs/_scripts.js'

import './index.scss'

import * as bootstrap from 'bootstrap'

Array.from(document.querySelectorAll('.dropdown'))
    .forEach(dropdown => {
        const dp = new bootstrap.Dropdown(dropdown);
        const label = dropdown.querySelector('.regular');
        const arrow = dropdown.querySelector('.location__arrow');
        const menu = dropdown.querySelector('.location__menu');

        dropdown.addEventListener('show.bs.dropdown', (e) => {
            arrow.classList.add('location__arrow_reversed');
        });
        dropdown.addEventListener('hide.bs.dropdown', (e) => {
            arrow.classList.remove('location__arrow_reversed')
        });

        dp._menu.addEventListener('click', (e) => {
            if (e.target.tagName !== 'A') return;
            const menu = e.target.closest('.location__menu');
            Array.from(menu.children).forEach(el => el.firstChild.classList.remove('active'));
            e.target.classList.add('active')
            label.innerHTML = dropdown.querySelector('.active').innerHTML;
        });
    })

Array.from(document.querySelectorAll('.carousel'))
    .forEach(carousel => {
        const slider = new bootstrap.Carousel(carousel);
        const next = carousel.querySelector('.carousel-control-next');
        next.addEventListener('click', ()=> slider.next())
        const prev = carousel.querySelector('.carousel-control-prev');
        prev.addEventListener('click', ()=> slider.prev())
    })    