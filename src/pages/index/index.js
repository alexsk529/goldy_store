import '../../libs/_scripts.js'

import './index.scss'

import * as bootstrap from 'bootstrap'

Array.from(document.querySelectorAll('.dropdown'))
    .forEach(dropdown => {
        new bootstrap.Dropdown(dropdown);
        const makeDropdown = (name) => {
            const label = dropdown.querySelector('.regular');
            const arrow = dropdown.querySelector(`.${name}__arrow`);
            const menu = dropdown.querySelector(`.${name}__menu`);
            Array.from(menu.children)[0].querySelector('a').classList.add('active')
            dropdown.addEventListener('show.bs.dropdown', () => {
                arrow.classList.add(`${name}__arrow_reversed`);
            });
            dropdown.addEventListener('hide.bs.dropdown', () => {
                arrow.classList.remove(`${name}__arrow_reversed`);
            });
    
            menu.addEventListener('click', (e) => {
                if (e.target.tagName !== 'A') return;
                Array.from(menu.children).forEach(el => el.firstChild.classList.remove('active'));
                e.target.classList.add('active')
                label.innerText = dropdown.querySelector('.active').innerText;
            });
        }
        const dropdownName = Array.from(dropdown.classList).find(el => el !== 'dropdown')
        makeDropdown(dropdownName);
    })