const express = require('express');
const app = express();
const dotenv = require('dotenv').config();
const morgan = require('morgan');

const {getCoords} = require('./functions/getCoords');
const {getWeather} = require('./functions/getWeather');

app.use(express.static(__dirname + './../../public'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(morgan('dev'));

app.get('/', (req, res) => {
  res.render('index', 'html');
});

app.post('/weather', (req, res) => {
  const address = req.body.address;

  getCoords(address)
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
      })
    })
});

module.exports = app;