Array.from(document.querySelectorAll('.options__choice')).forEach((colors) => {
    Array.from(colors.children).forEach((color, index) => {
        if (index === 1) color.classList.add('color_active')
    })

    colors.addEventListener('click', (e) => {
        if (!e.target.classList.contains('color')) return
        const active = Array.from(colors.children).find(el => el.classList.contains('color_active'))
        active.classList.remove('color_active')
        e.target.classList.add('color_active') 
    })
})