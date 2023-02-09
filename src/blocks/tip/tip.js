Array.from(document.querySelectorAll('.tip')).forEach(tooltip => {
    tooltip.addEventListener('mouseover', (e) => {
        e.target.querySelector('.tip__hint').classList.remove('tip__hint_hidden');
        setTimeout(function() {e.target.querySelector('.tip__hint').classList.remove('tip__hint_visuallyhidden')}, 20)
    })
    tooltip.addEventListener('mouseout', (e) => {
        e.target.querySelector('.tip__hint').classList.add('tip__hint_visuallyhidden')
        setTimeout(function() {e.target.querySelector('.tip__hint').classList.add('tip__hint_hidden')}, 300)
    })
})