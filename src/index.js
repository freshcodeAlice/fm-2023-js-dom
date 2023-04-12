/*

Створити в розмітці form з інпутом і кнопкою

За наснення на кнопку введене в інпут має додатись до певного масиву з даними, і відобразитися на екрані як елемент списку


Задачка з *: додати кожному елементу списку кнопку, яка його видаляє.
*/

const list = document.querySelector('#list');
const form = document.querySelector('#form');

let todoArray = [];

form.addEventListener('submit', function(event) {
    event.preventDefault();
    const userValue = event.target.todo.value;
    todoArray.push({
            text: userValue,
            id: todoArray.length
        });
    event.target.reset();
    renderList();
});

function createListItem(liObj) {
    const li = document.createElement('li');
    li.append(liObj.text);
    li.dataset.id = liObj.id;
    const button = document.createElement('button');
    button.textContent = 'Kill me';
    button.addEventListener('click', deleteHandler);
    li.append(button);

    return li;
}


function renderList() {
    const liArray = todoArray.map(el => createListItem(el));
    list.replaceChildren(...liArray);
}


function deleteHandler(event) {
    const liId = Number(event.target.parentElement.dataset.id);
    todoArray = todoArray.filter(liObj => liObj.id !== liId);
    renderList();
}