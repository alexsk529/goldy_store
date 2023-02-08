const groups = document.querySelectorAll('.group')
const badges = document.querySelectorAll('.group__items');

Array.from(groups).forEach(group => {
    const badge = group.querySelector('.group__items');
    const btns = group.querySelector('.group__arrows');
    const btnLeft = btns.querySelector('.group__arrow_left');
    const btnRight = btns.querySelector('.group__arrow_right');
    let index = 0;
    btnLeft.classList.add('group__arrow_disabled');
    btnLeft.disabled = true;

    const makeActive = (item) => {
        const active = Array.from(badge.children).find((el) => el.classList.contains('group__badge_active'));
        active.classList.remove('group__badge_active');
        item.classList.add('group__badge_active');
        index = Array.from(badge.children).indexOf(item);
    }

    const checkButtons = () => {
        const releaseLeftBtn = () => {
            btnLeft.classList.remove('group__arrow_disabled');
            btnLeft.disabled = false;
        }
        const releaseRightBtn = () => {
            btnRight.classList.remove('group__arrow_disabled');
            btnRight.disabled = false;
        }
        if (index === 0) {
            releaseRightBtn();
            btnLeft.classList.add('group__arrow_disabled');
            btnLeft.disabled = true;
        } else if (index === Array.from(badge.children).length - 1) {
            releaseLeftBtn();
            btnRight.classList.add('group__arrow_disabled');
            btnRight.disabled = true;
        } else {
            releaseLeftBtn();
            releaseRightBtn();
        }
    }

    badge.addEventListener('click', (e) => {
        if (!e.target.classList.contains('group__badge')) return;
        makeActive(e.target)
        checkButtons();
    });

    btnLeft.addEventListener('click', (e) => {
        if (index === 0) return;
        index += -1;
        makeActive(badge.children[index]);
        checkButtons();
    })

    btnRight.addEventListener('click', (e) => {
        if (index === (badge.children.length - 1)) return;
        index += 1;
        makeActive(badge.children[index]);
        checkButtons();
    })

})

