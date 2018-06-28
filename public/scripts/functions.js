const renderForecast = data => {
  forecastTitle.textContent = '';
  fourday.textContent = '';

  const forecast = document.createElement('h3');
  forecast.textContent = '4 Day Forecast';
  forecast.className = 'currently';

  forecastTitle.insertAdjacentElement('afterbegin', forecast);

  for (let obj of data.simpleforecast.forecastday) {
    const forecast = {
      day: obj.date.weekday,
      highTemp: obj.high.fahrenheit,
      lowTemp: obj.low.fahrenheit,
      conditions: obj.conditions,
      icon: obj.icon
    }

    renderForecastDay(forecast);
  }
}

const renderForecastDay = obj => {
  const template = document.getElementById('forecast-template').innerHTML;
  const forecast = Mustache.render(template, {
    icon: setIcon(obj.icon),
    date: obj.day,
    highTemp: obj.highTemp,
    lowTemp: obj.lowTemp,
    condtions: obj.condtions
  });
  const parsedForecast = new DOMParser().parseFromString(forecast, 'text/html').querySelector('div');

  fourday.appendChild(parsedForecast);
}

const renderCurrentWeather = obj => {
  weatherSection.textContent = '';

  const template = document.getElementById('current-weather-template').innerHTML;
  const weather = Mustache.render(template, {
    location: obj.display_location.full,
    icon: setIcon(obj.icon),
    currentTemp: obj.temp_f,
    currentWind: obj.wind_string,
    currentConditions: obj.weather 
  });
  const parsedWeather = new DOMParser().parseFromString(weather, 'text/html').querySelector('div');

  weatherSection.appendChild(parsedWeather);
}

const loading = (location) => {
  weatherSection.textContent = '';

  const template = document.getElementById('searching-template').innerHTML;
  const searching = Mustache.render(template, {
    location: location
  });
  const parsed = new DOMParser().parseFromString(searching, 'text/html').querySelector('div');

  weatherSection.appendChild(parsed);
}