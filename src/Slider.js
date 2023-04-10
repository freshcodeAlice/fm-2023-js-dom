class Slider {
    constructor(images) {
        this._images = images;
        this.currentIndex = 0;
    }

    get currentSlide(){
        return this._images[this.currentIndex];
    }

    set currentIndex(v) {
        if(typeof v !== 'number') {
            throw new TypeError('Index must be a number');
        }
        this._currentIndex = v;
    }

    get currentIndex() {
        return this._currentIndex;
    }

    get next() {
        return (this.currentIndex + 1) % this._images.length;
    }

    get prev() {
        return (this.currentIndex - 1 + this._images.length) % this._images.length;
    }
}