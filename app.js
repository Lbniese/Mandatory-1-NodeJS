// import express
const express = require('express');
// instantiate express
const app = express();
// define which port to listen on
const port = 8080;
// path
const path = require('path');

app.use(express.static('www'));

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/www/index.html'));
});
app.get('/codesnippets', function(req, res) {
    res.sendFile(path.join(__dirname + '/www/codesnippets.html'));
});
app.get('/api', function(req, res) {
    res.sendFile(path.join(__dirname + '/www/api.html'));
});
app.get('/terminal', function(req, res) {
    res.sendFile(path.join(__dirname + '/www/terminal.html'));
});
app.get('/theory', function(req, res) {
    res.sendFile(path.join(__dirname + '/www/theory.html'));
});
app.get('/tools', function(req, res) {
    res.sendFile(path.join(__dirname + '/www/tools.html'));
});

// listen to a port and start web server
app.listen(port, (error) => {
    if (error) {
      console.log(error);
    } else {
      console.log(`Server listening on ${port}!`);
    }
  });