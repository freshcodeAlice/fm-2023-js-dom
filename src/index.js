const p = fetch('https://fakestoreapi.com/products');

console.dir(p);

p
.then(function(responce) {
    console.log(responce);
    return responce.json();
    })
.then(function(jsData) {
    console.log(jsData);
    })
.catch(function(error) {
    console.log(error);
})
.finally(function() {
    console.log('FINALLY GET THERE')
});

/*
Варіант 1:
then має два коллбеки: перший виконується, якщо Promise -> resolve (fullfiled),
                        другий виконується, якщо Promise -> rejected

Варіант 2:
then має 1 коллбек, який виконується, якщо Promise -> resolve (fullfiled)
catch має 1 коллбек, який виконується, якщо в ланцюжку then-ів десь сталась помилка

*/