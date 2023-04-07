// Подія

/* Все, що стається на сторінці, все, чим користувач може взаємодіяти з нами - це події (event)
Клік мишею, наведення мишею, натиснення клавіші, завантаження ресурсу
*/

/*
Зробити 5 кнопок і навісити на них обробник події. За натиснення на будь-яку з цих кнопок зі всіх кнопок знімається обробник
*/

 const btnCollection = document.querySelectorAll('button');

 btnCollection.forEach(btn => {
    btn.addEventListener('click', clicker);
 })

 function clicker() {
    console.log('remove fun');
    btnCollection.forEach(btn => {
        btn.removeEventListener('click', clicker);
    })
}