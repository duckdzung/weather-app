const weatherAppContainer = document.querySelector(".weather-app-container");
const search = document.querySelector(".search");
const city = document.querySelector(".city");
const time = document.querySelector(".time");
const temperature = document.querySelector(".value");
const shortDesc = document.querySelector(".short-desc");
const visibility = document.querySelector(".visibility span");
const wind = document.querySelector(".wind span");
const cloud = document.querySelector(".cloud span");

const getWeather = async (location) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=d78fd1588e1b7c0c2813576ba183a667`

    const response = await fetch(url);
    const weather = await response.json();

    city.innerHTML = weather.name;
    time.innerHTML = new Date().toLocaleString();
    shortDesc.innerHTML = weather.weather[0].main;
    const roundedTemperature = Math.round(weather.main.temp);
    temperature.innerHTML = roundedTemperature;

    document.body.className = roundedTemperature >= 25 ? 'hot' : 'cold';
    weatherAppContainer.className = roundedTemperature >= 25 ? 'weather-app-container hot' : 'weather-app-container cold';
    console.log(weatherAppContainer);
    visibility.innerHTML = weather.visibility + ' (m)';
    wind.innerHTML = weather.wind.speed + ' (m/s)';
    cloud.innerHTML = weather.clouds.all + ' (%)';
    search.value = "";
}

search.addEventListener("keyup", (e) => {
    if (e.keyCode === 13) {
        getWeather(e.target.value)
    }
});

getWeather("ha noi");