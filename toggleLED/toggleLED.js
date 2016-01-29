'use strict'
var express = require('express'),
    j5 = require("johnny-five")

var app = express(),
    board = new j5.Board(),
    led;

board.on("ready", function() {
  // Create an Led on pin 13
  led = new j5.Led(13);
  console.log('ready');
});

app.listen(3000);

app.use(express.static(__dirname));

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/index.html');
});

app.get('/button', function(req, res) {
    console.log('pressed the button');
    led.toggle();
    res.end();
});