const renderForecast = data => {
  console.log(data);
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
  const day = document.createElement('h3');
  const temp = document.createElement('p');
  day.textContent = obj.day;
  temp.textContent = obj.highTemp;
  forecastSection.insertAdjacentElement('afterbegin', setIcon(obj.icon))
  forecastSection.insertAdjacentElement('afterbegin', day);
  forecastSection.insertAdjacentElement('afterbegin', temp);
}

const renderCurrentWeather = data => {
  const temp = data.weather.current.temp_f
  const location = data.weather.current.display_location.full

  const h3 = document.createElement('h3');
  h3.textContent = temp;

  const h2 = document.createElement('h2');
  h2.textContent = location;

  weatherSection.insertAdjacentElement('afterbegin', setIcon(data.weather.current.icon));
  weatherSection.insertAdjacentElement('afterbegin', h3);
  weatherSection.insertAdjacentElement('afterbegin', h2);
}