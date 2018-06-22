const http = require('http');
const socket = require('socket.io');
const c = require('ansi-colors');

const app = require('./app/app');

const port = process.env.PORT || 3000;
const server = http.createServer(app);

server.listen(port, () => {
  console.log(`App is running on port ${c.blue(port)}`);
});