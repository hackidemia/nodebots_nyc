var express = require('express');
var app = express();
var five = require("johnny-five");
var board = new five.Board();
var swig = require('swig');

app.engine('html', swig.renderFile);
app.set('view engine', 'html');
app.set('views', __dirname);

var swtch;
var led;
var state;

app.get('/', function (req, res) {
  res.render('index', state); //you would send state, but as an object
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

board.on("ready", function() {
  led = new five.Led(13);
  swtch = new five.Switch(8);

  swtch.on("open", function() {
    led.on();
    // NodeJS Code for when you activate switch
    state = {msg: "Led is on!"};
  });

  swtch.on("close", function() {
    led.off();
    // NodeJS Code for when switch not active
    state = {msg: "Led is off!"};
  });
});

