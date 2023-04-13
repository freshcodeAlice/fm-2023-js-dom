const p = fetch('https://fakestoreapi.com/products');

p
.then(function(responce) {
    console.log(responce);
    return responce.json();
    })
.then(function(jsData) {
    const cardArray = jsData.map(obj => createCard(obj));
    const root = document.querySelector('#root');
    root.append(...cardArray);
    })
.catch(function(error) {
    console.log(error);
})
.finally(function() {
    console.log('FINALLY GET THERE')
});



function createCard(objCard) {
    const img = createElement('img', {classNames: ['card-img'], attributes: [{src: objCard.image}]});
    const h3 = createElement('h3', {classNames: ['card-title']}, objCard.title);
    const p = createElement('p', {classNames: ['card-description']}, objCard.description);
    const h4 = createElement('h4',  {classNames: ['card-price']}, objCard.price);
     const article = createElement('article', {classNames: ['card-wrapper']}, h3, img, h3, p, h4);

    return article;
}


function createElement(type, {classNames, attributes}, ...children) {
    const elem = document.createElement(type);
    if (attributes) {
        console.log(attributes)
        attributes.forEach((attrObj) => { 
            for (const key in attrObj) {
               elem.setAttribute(key, attrObj[key]);
            }
        })
    }
    elem.classList.add(...classNames);
    elem.append(...children);

    return elem;
}

/*
Додати обробку подій, пов'язану з карткою

*/