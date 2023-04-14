
/*
Async/await


*/

async function getServerData() {
    const responce = await fetch('https://fakestoreapi.com/products');
    const data = await responce.json();

    return data;
}


getServerData().then((value) => {
    console.log(value);
})

