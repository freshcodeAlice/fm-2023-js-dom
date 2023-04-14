/* loadImage */

//https://assets.entrepreneur.com/content/3x2/2000/20200429211042-GettyImages-1164615296.jpeg


function loadImg(src) {
    const img = document.createElement('img');
    img.setAttribute('src', src);

    return new Promise((resolve, reject) => {
        img.addEventListener('load', (event) => {
           resolve(img)
        });
        img.addEventListener('error', (event) => {
            reject('Image cannot be loaded');
        });
    })
}

const root = document.querySelector('#root');
const div = document.createElement('div');
div.classList.add('wrapper');
root.append(div);
const img = loadImg('https://.jpeg')
.then((img) => {
    div.append(img)
})
.catch((err) => {
    console.error(err);
});

setTimeout(()=> {
    console.log('code is working')
}, 5000);