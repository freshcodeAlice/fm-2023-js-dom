// Подія

/* Все, що стається на сторінці, все, чим користувач може взаємодіяти з нами - це події (event)
Клік мишею, наведення мишею, натиснення клавіші, завантаження ресурсу
*/

const btn = document.querySelector('#btn');

function clickHandler() {
    alert('Button clicked');
}

btn.addEventListener('click', clickHandler);




/*
Зробити кнопку
і написати функцію, яка виводить кількість разів, скільки на цю кнопку вже натискали раніше
*/

let counter = 0;

function getCountClicker() {
    alert(++counter);

    if (counter > 2) {
        btn.removeEventListener('click', clickHandler);
    }
}

btn.addEventListener('click', getCountClicker);
