Array.from(document.querySelectorAll('.options__icon')).forEach(icon => {
    const like = icon.querySelector('.like__icon')
    if (like) {
        icon.addEventListener('click', (e) => {
            if (e.target.classList.contains('like__icon')) return
            like.classList.toggle('like__icon_active')
        })
    }
})