const form = document.getElementById('weather-location');
const weatherSection = document.getElementById('weather-info');
const forecastSection = document.getElementById('forecast-info')

let address;

form.addEventListener('submit', e => {
  e.preventDefault();

  address = encodeURIComponent(e.target[0].value.trim());

  axios.post('./api/weather', {
    address
  }).then(response => {
    renderCurrentWeather(response.data.weather.current);
    renderForecast(response.data.weather.forecast);
  }).catch(error => {
    weatherSection.textContent = error;
  });

  e.target[0].value = '';
});