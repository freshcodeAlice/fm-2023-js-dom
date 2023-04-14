/* Проміс зсередини */


const p = new Promise(executor);

function executor(resolve, reject) {
   setTimeout(()=>{
    resolve('its okay')
   }, 2000);
}
console.log(p);


p.then(function (value) {
    console.log(value)
}, function(error) {
    console.log(error);
})


/*
Написати проміс з котом Шредингера - в половині випадків проміс 
має зарезолвитись, в половині - реджектнутись

*/


const catPromise = new Promise(function(resolve, reject){
    if (Math.random() > 0.5) {
        resolve('Cat is alive')
    } else {
        reject('Cat is dead');
    }
})

console.log(catPromise);

catPromise.then((value)=>{
    console.log('RESOLVE ->', value)
}, (error) => {
    console.log('REJECT ->', error);
})