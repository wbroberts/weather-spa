const socket = require('socket.io');

socket.on('newLocation', location => {
  console.log(location);
});

module.exports = socket;