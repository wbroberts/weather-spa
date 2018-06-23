const form = document.getElementById('weather-location');
const weatherSection = document.querySelector('.weather');
const forecastSection = document.querySelector('.forecast');

let address;

form.addEventListener('submit', e => {
  e.preventDefault();

  address = encodeURIComponent(e.target[0].value);

  axios.post('./weather', {
    address
  }).then(response => {
    renderCurrentWeather(response.data);
    renderForecast(response.data.weather.forecast);
  }).catch(error => {
    weatherSection.textContent = error;
  });

  e.target[0].value = '';
});