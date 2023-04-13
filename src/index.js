const p = fetch('https://fakestoreapi.com/products');

console.dir(p);

p.then(function(responce) {
    console.log('success!');
    console.log(responce); // Responce - об'єкт відповіді, що є значенням проміса [[PromiseResult]]
    /*
    В об'єкті Responce маємо body, який лежить як набір байтів. Нам потрібно розпарсити цей body як
    або текст
    або formData (файл)
    або json


    */
   const p2 = responce.json();
   p2.then(function(jsData) {
        console.log(jsData);
   }, function(error) {
        console.log(error);
   })

}, function(error) {
    console.log('error');
    console.log(error);
});


//// Sync work