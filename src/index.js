const form = document.querySelector('.form');
const errorContainer = document.querySelector('.error-message');

form.addEventListener('submit', function(event) {
    event.preventDefault();
    errorContainer.textContent = '';
    errorContainer.classList.remove('show-error');
//    console.log(event);
    const {email: {value: emailValue}, pass: {value: passValue}} = event.target;
//    if(!emailValue.includes('@')) {
//     errorContainer.textContent = 'Email is not valid';
//     errorContainer.classList.add('show-error');
//    }
   if(passValue.toLowerCase().includes('qwerty') || passValue.length <= 5) {
    errorContainer.textContent = 'Pass is not valid';
    errorContainer.classList.add('show-error');
   }
})


/*
Прийняти від користувача пароль і перевірити, чи не місить він слова "qwerty" і чи більший він за 5 символів
 

*/