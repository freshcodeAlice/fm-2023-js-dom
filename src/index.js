/*
DOM - інтерфейс для взаємодії з документом
Вхідна точка інтерфейсу - об'єкт document

Все, що є в документ - це об'єкти.

*/

const p = document.querySelector('p');
console.dir(p);

const cn = document.querySelector('.cn');
console.dir(cn);


const ul = document.querySelector('section > article > ul');
console.dir(ul);

const liArr = document.querySelectorAll('li');
console.dir(liArr);


const htmlLiArr = document.getElementsByTagName('li');
console.dir(htmlLiArr);

