const axios = require('axios');

const getWeather = (lat, long) => {
  return axios.get(`http://api.wunderground.com/api/${process.env.WEATHER_KEY}/forecast/conditions/q/${lat},${long}.json`)
    .then(result => {
      return {
        current: result.data.current_observation,
        forecast: result.data.forecast
      }
    })
    .catch(error => {
      return Promise.reject();
    })
}

module.exports.getWeather = getWeather;