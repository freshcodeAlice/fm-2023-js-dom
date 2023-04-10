// Подія

/*
За натиснення на батьківський елемент (секцію gamefield) маємо перемістити дів box за тими координами, куди клацнув користувач

*/


const gamefield = document.querySelector('.gamefield');
//const box = document.querySelector('.box');

gamefield.addEventListener('click', function (event) {

    if(event.target === event.currentTarget) {
        const box = event.target.children[0];
        console.dir(box);
        const x = event.clientX - (box.offsetWidth / 2);
        const y = event.clientY - (box.offsetHeight / 2);
        box.style.top = `${y}px`;
        box.style.left = `${x}px`;
    }    
})