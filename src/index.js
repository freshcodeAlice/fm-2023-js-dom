// Промісифікація функції 
function loadFun() {
    if (Math.random() > 0.5) {
        return new Promise((resolve)=>{
            resolve(5);
        });
    } else {
        return Promise.resolve(1);
    }
}


const res = loadFun();
res.then((value)=>{
    console.log('PROMISE VALUE', value);
})
