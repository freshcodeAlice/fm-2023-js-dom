const btn = document.querySelector('button');
//const section = document.querySelector('section');

btn.addEventListener('click', createSquare);


function createSquare() {
        const div = document.createElement('div'); // Створює елемент в пам'яті і повертає посилання на нього
        document.body.append(div); // Приєднуємо до батьківського елемента, таким самим чином відображаючи елемент
        div.classList.add('red-circle');
        const parentWidth = document.body.offsetWidth;
        const parentHeight = document.body.offsetHeight;
        div.style.top = `${getRandomCoordinates(0, parentHeight)}px`;
        div.style.left = `${getRandomCoordinates(0,parentWidth)}px`;
}

function getRandomCoordinates(min, max) {
        return Math.random() * (max - min) + min;
}