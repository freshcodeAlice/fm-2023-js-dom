/* Проміс зсередини */


const p = new Promise(executor);

function executor(resolve, reject) {
    if(2+2 === 3) {
        resolve(1); // Promise -> fullfiled (resolved) - успіх
    } else {
        reject(2); // Promise -> rejected - помилка
    }
}
console.log(p);


p.then(function (value) {
    console.log(value)
}, function(error) {
    console.log(error);
})