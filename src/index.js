const main = document.querySelector('main');

const cardArray = data.map((catObj) => {


    // const img = document.createElement('img');
    // img.setAttribute('src', catObj.avatar);
    // img.classList.add('cat-photo');
    const img = createElement('img', ['cat-photo']);
    img.setAttribute('src', catObj.avatar);
    
    // const h3 = document.createElement('h3');
    // h3.append(catObj.name);
    // h3.classList.add('name');
    const h3 = createElement('h3', ['name'], [catObj.name]);

    // const p = document.createElement('p');
    // p.classList.add('nickname');
    // p.append(catObj.nickname);
    const p = createElement('p', ['nickname'], [catObj.nickname]);

    return createElement('section', [], [img, h3, p]);
    //    const section = document.createElement('section');
    // section.append(img, h3, p);
    // return section
})

main.append(...cardArray);


function createElement(type, classList = [], children = []){
    const elem = document.createElement(type);
    elem.classList.add(...classList);
    elem.append(...children);

    return elem;
}