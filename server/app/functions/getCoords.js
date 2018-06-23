const axios = require('axios');

// Returns an object containing the latitude and longitude of searched location
const getCoords = (address) => {
  
  const geocodeURL = `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${process.env.GEO_KEY}`;

  return axios.get(geocodeURL)
    .then(result => {
      return { 
        lat: result.data.results[0].geometry.location.lat, 
        long: result.data.results[0].geometry.location.lng
      }
    })
    .catch(error => {
      return Promise.reject(error);
    });
}

module.exports.getCoords = getCoords;