Array.from(document.querySelectorAll('.size-bar')).forEach(sizeBar => {
    Array.from(sizeBar.children).forEach((size, index) => {
        if (index === 0) size.classList.add('size-bar__item_active');
        if (
            index === (Array.from(sizeBar.children).length - 1) ||
            index === (Array.from(sizeBar.children).length - 2)
            ) size.classList.add('size-bar__item_disabled');

        size.addEventListener('click', (e) => {
            const current = e.target.closest('.size-bar__item')
            if (
                !current.classList.contains('size-bar__item') || 
                current.classList.contains('size-bar__item_disabled')
                ) return
            const active = Array.from(sizeBar.children).find(el => el.classList.contains('size-bar__item_active'));
            active.classList.remove('size-bar__item_active');
            current.classList.add('size-bar__item_active')
        })

    })
})