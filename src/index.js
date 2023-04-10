// Подія

/*
Створити блок div і за натиснення на нього всередині вивести коордінати кліка

*/

const div = document.querySelector('.wrapper');

div.addEventListener('click', function(event) {
    event.target.textContent = `x:${event.clientX} y: ${event.clientY}`;
})