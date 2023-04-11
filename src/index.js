const btn = document.querySelector('button');
//const section = document.querySelector('section');

btn.addEventListener('click', createSquare);


function createSquare() {
    const div = document.querySelector('.red-circle');
    if (div) {
        div.remove();
    } else {
        const div = document.createElement('div'); // Створює елемент в пам'яті і повертає посилання на нього
        document.body.append(div); // Приєднуємо до батьківського елемента, таким самим чином відображаючи елемент
        div.classList.add('red-circle');
        // div.append('text-text')
    }
   
}


/*
За натиснення на кнопку створювати в body червоні кружечки

*/