// Подія
const div = document.querySelector('.score');
const btn = document.querySelector('button');
const parentDiv = document.querySelector('div');

let count = 0;
// div.textContent = 1;

function incrementScore() {
    count++;
    updateView()
}

function decrementScore() {
    count--;
    updateView()
}

function updateView() {
    div.textContent = count;
}

/*
Задачка з *: збільшувати рахунок за натиснення на батьківський елемент, а за натиснення на будь-який з дочірніх - віднімати бали

*/

parentDiv.addEventListener('click', function(event){
    if(event.currentTarget === event.target) {
        incrementScore()
    } else {
        decrementScore()
    }
})