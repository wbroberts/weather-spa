const express = require('express');
const dotenv = require('dotenv').config();
const morgan = require('morgan');
const path = require('path');

// My files
const {getCoords} = require('./functions/getCoords');
const {getWeather} = require('./functions/getWeather');

const app = express();
const publicPath = path.join(__dirname, './../../public')

app.use(express.static(publicPath));
app.use(express.json());
app.use(morgan('dev'));

// The homepage--only page
app.get('/', (req, res) => {
  res.render('index', 'html');
});

// Gets the coordinates the user searches for
// and then gets the current weather and forecast
// for location. Then it sends info back.
app.post('/api/weather', (req, res) => {

  getCoords(req.body.address)
    .then(coords => {
      return getWeather(coords.lat, coords.long);
    })
    .then(weather => {
      res.status(200).json({
        weather
      });
    })
    .catch(error => {
      res.status(400).json({
        error
      });
    });

});

module.exports = app;