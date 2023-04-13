const p = fetch('https://fakestoreapi.com/products');

console.dir(p);

p
.then(function(responce) {
    return responce.json();
    }, function(error) {
    console.log(error);
    })
.then(function(jsData) {
    console.log(jsData);
    }, function(error) {
    console.log(error);
    })

//// Sync work