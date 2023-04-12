const id = setTimeout(function () {
    console.log('tick')
}, 10000);


function tick() {
    console.log('tack');
}



tick();

let j = 0;
for (let i = 0; i < 100000000; i++) {
    j++;    
}

console.log(j)

clearTimeout(id);