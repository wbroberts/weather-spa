const axios = require('axios');

const getCoords = (address) => {
  
  const geocodeURL = `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${process.env.GEO_KEY}`;

  return axios.get(geocodeURL)
    .then(result => {
      const lat = result.data.results[0].geometry.location.lat;
      const long = result.data.results[0].geometry.location.lng;

      return { lat, long }
    })
    .catch(err => {
      return Promise.reject();
    });
}

module.exports.getCoords = getCoords;