const axios = require('axios');

// Returns an object containing both the current weather and the forecast
// for the next four days.
const getWeather = (lat, long) => {

  const weatherURL = `http://api.wunderground.com/api/${process.env.WEATHER_KEY}/forecast/conditions/q/${lat},${long}.json`;

  return axios.get(weatherURL)
    .then(result => {
      return {
        current: result.data.current_observation,
        forecast: result.data.forecast
      }
    })
    .catch(error => {
      return Promise.reject(error);
    })
}

module.exports.getWeather = getWeather;