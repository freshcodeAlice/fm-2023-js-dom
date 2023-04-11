const form = document.querySelector('.form');
const errorContainer = document.querySelector('.error-message');

form.addEventListener('submit', function(event) {
    event.preventDefault();
//    console.log(event);
    const {email: {value: emailValue}, pass: {value: passValue}} = event.target;
   if(!emailValue.includes('@')) {
    errorContainer.textContent = 'Email is not valid';
    errorContainer.classList.add('show-error');
   }
})