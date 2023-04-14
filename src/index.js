const form = document.querySelector('form');


form.addEventListener('submit', function (event) {
    event.preventDefault();
    getWeatherData(event.target.city.value)
})


async function getWeatherData(city) {
    const API_KEY = 'f7c576ba3699bdd0b98ddcf196639992';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&lang=ua&units=metric`;
    const responce = await fetch(url);
    const data = await responce.json();
    console.log(data);
    updateWeatherCard(data)
}


function updateWeatherCard(wheatherObj) {
    const wrapper = document.querySelector('.weather-card');
    wrapper.classList.add('show');
    wrapper.children[0].textContent = `Погода в місті ${wheatherObj.name}`;
    wrapper.children[1].textContent = `Температура повітря: ${wheatherObj.main.temp}`;
    wrapper.children[2].textContent = `Погода: ${wheatherObj.weather[0].description}`;
    wrapper.children[3].textContent = `Швидкість вітру: ${wheatherObj.wind.speed}`;
}
