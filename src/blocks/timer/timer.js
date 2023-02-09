Array.from(document.querySelectorAll('.timer')).forEach(timer => {
    const hours = {
        number: timer.querySelector('.timer__hour').querySelector('.timer__number'),
        text: timer.querySelector('.timer__hour').querySelector('.timer__text')
    } 
    const minutes = {
        number: timer.querySelector('.timer__minute').querySelector('.timer__number'),
        text: timer.querySelector('.timer__minute').querySelector('.timer__text')
    } 
    const seconds = {
        number: timer.querySelector('.timer__second').querySelector('.timer__number'),
        text: timer.querySelector('.timer__second').querySelector('.timer__text')
    }
    let timerId;
    let date = new Date();
    date = new Date(date.getFullYear(), date.getMonth(), date.getDate());
    date.setHours(date.getHours() + +hours.number.innerText);
    date.setMinutes(date.getMinutes() + +minutes.number.innerText);
    date.setSeconds(date.getSeconds() + +seconds.number.innerText);

    function conj(num, words) {
        return words[(num % 100 > 4 && num % 100 < 20) ? 2 : [2, 0, 1, 1, 1, 2][(num % 10 < 5) ? num % 10 : 5]];
    }

    function countDown () {
        const diff = Date.parse(date) - 1000;
        date.setSeconds(date.getSeconds() - 1)
        if (diff <= 0) clearInterval (timerId)

        const h = diff > 0 ? new Date(diff).getHours() : 0;
        const m = diff > 0 ? new Date(diff).getMinutes() : 0;
        const s = diff > 0 ? new Date(diff).getSeconds() : 0;
        hours.number.innerText = h < 10 ? '0' + h : h;
        minutes.number.innerText = m < 10 ? '0' + m : m;
        seconds.number.innerText = s < 10 ? '0' + s : s;

        hours.text.innerText = conj(h, ['час','часа','часов'])
        minutes.text.innerText = conj(m, ['минута','минуты','минут'])
        seconds.text.innerText = conj(s, ['секунда','секунды','секунд'])
    } 
    countDown();
    timerId = setInterval(countDown, 1000)

})