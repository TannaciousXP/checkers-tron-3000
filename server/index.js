const express = require('express');
const server = express();
const path = require('path');

server.use(express.urlencoded({extended: true}));
server.use(express.static(path.join(__dirname, '../public')));


server.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});


server.listen(3000, () => {
  console.log('Listening on checker-tron');
});