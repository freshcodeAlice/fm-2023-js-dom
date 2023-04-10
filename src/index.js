const btn = document.querySelector('#show');
const passInput = document.querySelector('#pass');

const attr = document.createAttribute('type');
passInput.setAttributeNode(attr);


btn.addEventListener('click', function () {
    attr.value = attr.value === 'password' ? 'text' : 'password';

//    passInput.setAttribute('type', 'password');

})