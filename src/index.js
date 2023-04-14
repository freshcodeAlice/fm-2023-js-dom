
/*
Async/await


*/

async function getServerData() {
    /* Або try-catch */
    const responce = await fetch('https://'); /*  В разі помилки await її просто викине */
    const data = await responce.json();

    return data;
}


getServerData()
.then((value) => {
    console.log(value);
}) 
.catch(err => { /* Або обробка помилки проміса на поверненні результату */
    console.log(err);
})

