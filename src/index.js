
/*
Зробити div з п'ятьма різними кнопками. Кожній кнопці відповідає певний колір. За натиснення на кнопку батьківський дів в якості фонового кольору отримує те значення, яке написано на кнопці


*/

const btnCollection = document.querySelectorAll('button');

btnCollection.forEach(btn => {
    btn.addEventListener('click', function({target: {parentElement, dataset}}) {
        parentElement.style.backgroundColor = dataset.color;
    })
})