const par = document.getElementById('paragraph');

console.dir(par);
par.textContent = 'Hello, world';

/*
DOM - інтерфейс для взаємодії з документом
Вхідна точка інтерфейсу - об'єкт document

Все, що є в документ - це об'єкти.


*/


const liArr = document.getElementsByTagName('li');
console.log(liArr);

console.log(liArr[0]);

const cnArray = document.getElementsByClassName('cn');
console.log(cnArray);