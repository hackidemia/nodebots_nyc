// Express Stuff
var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
// Hardware Stuff
var five = require("johnny-five");
var board = new five.Board();
var swtch;
var led;

// Wiring
// Pin 8 to one side of switch
// GND to other side of switch
// LED @ Pin 13 & GND

// Express Code
app.use(express.static('public'));

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html');
  //res.send(state);
});

http.listen(3333, function(){
  console.log('listening on *:3333');
});

// Hardware Code

board.on("ready", function() {
  led = new five.Led(13);
  swtch = new five.Switch(8);

  swtch.on("open", function() {
    led.on();
    // NodeJS Code for when you activate switch
    io.emit('explode');
  });

  swtch.on("close", function() {
    led.off();
    // NodeJS Code for when switch not active
    io.emit('restore');
  });
});

