// Подія

/* Все, що стається на сторінці, все, чим користувач може взаємодіяти з нами - це події (event)
Клік мишею, наведення мишею, натиснення клавіші, завантаження ресурсу
*/

/// Ціль події (target) - елемент, на якому сталася подія


const btn = document.querySelector('button');
// const section = document.querySelector('section');
 const div = document.querySelector('div');

// btn.addEventListener('click', function(event) {
//     console.log('button');
//     // event.target - посилання на об'єкт, який є ціллю нашої події
//     console.dir(event);

// });


div.addEventListener('click', function(event) {
    console.log('div');
    console.log(event.target);
    console.log(event.currentTarget); // currentTarget = елемент, на якому спрацьовує eventListener
    if(event.target === event.currentTarget) {
        event.target.children[0].style.backgroundColor = 'red';
    }

});

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
