const input = document.querySelector('[name="pass"]');
console.log(input);

input.addEventListener('change', function({target: {value: {length}}}) {
    if(length < 5) {
        showTip('low')
    } else if (length >= 5 && length <= 7) {
        showTip('medium')
    } else {
        showTip('strong')
    }
})

/*
Напишіть обробку події change таким чином, щоб якщо довжина паролю < 5, виводилось "слабкий пароль"
якщо від 5 до 7 - середній
якщо більше 8 - добрий пароль

*/


function showTip(passType = '') {
    const tip = document.querySelector('.tip');
    tip.classList.remove('show', 'low', 'medium', 'strong');
    
    /// Заповнюємо актуальними даними

    tip.classList.add('show', passType);
    tip.textContent = `${passType} password`;
}
