const likes = document.querySelectorAll('.like')

Array.from(likes).forEach(like => {
    like.addEventListener('click', (e) => {
        if (e.target.tagName !== 'SPAN') return;
        e.target.classList.toggle('like__icon_active')
    })
})