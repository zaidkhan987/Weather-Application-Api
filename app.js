const inputBox = document.querySelector('.input-box');
const searchBtn = document.querySelector('#search-btn');
const weather_img = document.querySelector('.wheather-img');
const temperatue = document.querySelector('.temperature');
const description = document.querySelector('.description');
const humidity = document.querySelector('#humidity');
const wind_speed = document.querySelector('#wind-speed');
const loacation_not_found = document.querySelector('.location-not-found');
const weather_body = document.querySelector('.weather-body')

async function checkWeather(city) {
     const api_key = 'ba23a633791a5a529dcefd41c4b16dd7';
     const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`
     const weather_data = await fetch(`${url}`).then(Response => Response.json())

     if (weather_data.cod === '404') {
          loacation_not_found.style.display = 'flex';
          weather_body.style.display = 'none'

     }
     loacation_not_found.style.display = 'none';
     weather_body.style.display = 'flex'
     temperatue.innerHTML = `${Math.round(weather_data.main.temp - 273.15)}°C`;
     description.innerHTML = `${weather_data.weather[0].main}`;
     humidity.innerHTML = `${weather_data.main.humidity}%`;
     wind_speed.innerHTML = `${weather_data.wind.speed}/H`;


     switch (weather_data.weather[0].main) {
          case 'Clouds':
               weather_img.src = "/assets/cloud.png";
               break;
          case 'Clear':
               weather_img.src = "/assets/clear.png";
               break;
          case 'Mist':
               weather_img.src = "/assets/mist.png";
               break;
          case 'Rain':
               weather_img.src = "/assets/rain.png";
               break;
          case 'Snow':
               weather_img.src = "/assets/snow.png";
               break;
     }



}
searchBtn.addEventListener('click', () => {
     checkWeather(inputBox.value)
})