const images = ['https://thumbs.dreamstime.com/b/beautiful-rain-forest-ang-ka-nature-trail-doi-inthanon-national-park-thailand-36703721.jpg', 
'https://images.freeimages.com/images/previews/ac9/railway-hdr-1361893.jpg',
'https://imgv3.fotor.com/images/blog-cover-image/part-blurry-image.jpg',
'https://www.w3schools.com/w3css/img_lights.jpg',
'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhze-QNnca2liBrhRj4CjswGZSkqbhvSDJsQ&usqp=CAU' ];


const img = document.querySelector('.image');
const attrSrc = document.createAttribute('src');
img.setAttributeNode(attrSrc);

const [prevBtn, nextBtn] = document.querySelectorAll('.btns > .btn');

const slider = new Slider(images);

console.log(slider);

function updateView() {
    attrSrc.value = slider.currentSlide
}


updateView();

const createBtnHandler = (direction = 'next') => {
    return function () {
        slider.currentIndex = slider[direction];
        updateView();
    }
}

prevBtn.addEventListener('click', createBtnHandler('prev'))

nextBtn.addEventListener('click', createBtnHandler('next'));