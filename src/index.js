// Подія

/* Все, що стається на сторінці, все, чим користувач може взаємодіяти з нами - це події (event)
Клік мишею, наведення мишею, натиснення клавіші, завантаження ресурсу
*/

/// Ціль події (target) - елемент, на якому сталася подія


const btn = document.querySelector('button');
// const section = document.querySelector('section');
// const div = document.querySelector('div');

btn.addEventListener('click', function(event) {
    console.log('button');
    // event.target - посилання на об'єкт, який є ціллю нашої події
    console.dir(event.target);
    event.target.style.backgroundColor = 'blue';
}, true);


/*
Зробити 5 кнопок, за натиснення на кожну з них кнопка сама себе видаляє
 */

const btnCollection = document.querySelectorAll('article > button');
console.log(btnCollection);

btnCollection.forEach(btn => {
    btn.addEventListener('click', function (event) {
        event.target.remove()
    })
})


// div.addEventListener('click', function() {
//     console.log('div');
// }, true);

// section.addEventListener('click', function() {
//     console.log('section');
// }, true);


// document.body.addEventListener('click', function() {
//     console.log('body');
// }, true);


/*
3 фази події

1 фаза - це "занурення" події
Подія стається на рівні ОС і "занурюється" до найглибше вкладеного елмента за тими координатами, де сталася подія

2 фаза - "фаза цілі"
Подія дісталася до елемента, якому була призначена

3 фаза - "сплиття" події
*/