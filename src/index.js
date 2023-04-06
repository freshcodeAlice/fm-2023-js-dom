

const h1 = document.querySelector('h1');


const liArr = document.querySelectorAll('li');
liArr.forEach((li)=>{
    li.classList.add('new-list-item');
    li.classList.remove('list-item');
})
