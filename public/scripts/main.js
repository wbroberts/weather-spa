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
    console.log(response.data)
  }).catch(error => {
    console.log(error)
  });

});

// Begin functions section



const renderCurrentWeather = data => {
  console.log(data)
  const temp = data.temp_f
  const location = data.display_location.full

  const h3 = document.createElement('h3');
  h3.textContent = temp;

  const p = document.createElement('p');
  p.textContent = location;

  weatherSection.insertAdjacentElement('afterbegin', h3);
  weatherSection.insertAdjacentElement('afterbegin', p);
}

const renderForecast = data => {
  console.log(data);
  for (let obj of data.simpleforecast.forecastday) {
    const forecast = {
      day: obj.date.weekday,
      highTemp: obj.high.fahrenheit,
      lowTemp: obj.low.fahrenheit,
      conditions: obj.conditions
    }

    renderForecastDay(forecast);
  }
}

const renderForecastDay = obj => {
  const day = document.createElement('h3');
  const temp = document.createElement('p');
  day.textContent = obj.day;
  temp.textContent = obj.highTemp;
  forecastSection.insertAdjacentElement('afterbegin', day);
  forecastSection.insertAdjacentElement('afterbegin', temp);
  console.log(obj)
}
