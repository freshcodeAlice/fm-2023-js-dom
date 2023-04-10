// Подія



document.addEventListener('keydown', (event) => {
    const SIZE = 10;
    const box = event.currentTarget.body.children[0];
   const x = box.offsetLeft;
   const y = box.offsetTop;
   switch(event.code) {
        case "ArrowLeft": {
            box.style.left = `${x - SIZE}px`;
            break;
        }
        case "ArrowRight": {
            box.style.left = `${x + SIZE}px`;
            break;
        }
        case "ArrowUp": {
            box.style.top = `${y - SIZE}px`;
            break;
        }
        case "ArrowDown": {
            box.style.top = `${y + SIZE}px`;
            break;
        }

    }
})