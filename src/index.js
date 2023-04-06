/*
Створити структуру:

header
    nav
        ul
            li.list-item*5

main
    article
        h1{Heading}
        p>lorem50

Не використовуючи css-файла, зробити заголовок фіолетовим і з розміром тексту 20пкс
List-item вибудувати в рядочок, зробити їм фоновий колір рожевий

Параграфу дати колір тексту синій



*/

const h1 = document.querySelector('h1');
h1.style.color = 'violet';
h1.style.fontSize = '20px';

const liArr = document.querySelectorAll('li');
liArr.forEach((li)=>{
    li.style.display = 'inline-block';
    li.style.backgroundColor = 'pink'
})

const p = document.querySelector('p');
p.style.color = 'blue';