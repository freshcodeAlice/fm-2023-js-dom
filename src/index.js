// Подія

/*
За натиснення на батьківський елемент (секцію gamefield) маємо перемістити дів box за тими координами, куди клацнув користувач

*/

let counter = 0;

const score = document.querySelector('.score');
const gamefield = document.querySelector('.gamefield');
//const box = document.querySelector('.box');

gamefield.addEventListener('click', function (event) {

    if(event.target !== event.currentTarget) {
        counter++;
        updateView();
    }  
    
    const box = event.currentTarget.children[0];

    const x = getRandomCoordinate(0, event.currentTarget.offsetWidth) - (box.offsetWidth / 2);
    const y = getRandomCoordinate(0, event.currentTarget.offsetHeight) - (box.offsetHeight / 2);
    box.style.top = `${y}px`;
    box.style.left = `${x}px`;
})

function getRandomCoordinate(min, max) {
    return Math.random() * (max - min) + min;
  }


function updateView() {
    score.textContent = counter;
}