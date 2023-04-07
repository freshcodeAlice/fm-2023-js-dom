// Подія
const div = document.querySelector('.score');
const btn = document.querySelector('button');
const parentDiv = document.querySelector('div');

let count = 0;
// div.textContent = 1;

function incrementScore() {
    count++;
    div.textContent = count;
}

/*
Написати код таким чином, щоб в блоці score відображалась кількість натиснень на кнопку

*/

btn.addEventListener('click', incrementScore)





/*
Задачка з *: збільшувати рахунок за натиснення на батьківський елемент, а за натиснення на будь-який з дочірніх - віднімати бали

*/