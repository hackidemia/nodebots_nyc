// Express Stuff
var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
// Hardware Stuff
var five = require("johnny-five");
var board = new five.Board();
//var swtch;
var btn;
var btn2
var led;

// Express Code
app.use(express.static('public'));

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html');
});

http.listen(3333, function(){
  console.log('listening on *:3333');
});

// Hardware Code
board.on("ready", function() {
  led = new five.Led(13);
  //swtch = new five.Switch(7);
  btn = new five.Button({
    pin: 7, 
    isPullup: true,
    holdtime: 100
  });



  btn2 = new five.Button({
    pin: 9,
    isPullup: true,
    holdtime: 100
  })

  btn.on("hold", function() {
    led.on();
    io.emit('Cpress');
  });

  btn.on("release", function() {
    led.off();
    io.emit('Crelease');
  });

  btn2.on("hold", function() {
    led.on();
    io.emit('Dpress');
  });

  btn2.on("release", function() {
    led.off();
    io.emit('Drelease');
  });

//   btn3.on("hold", function() {
//     led.on();
//     io.emit('Epress');
//   });

//   btn3.on("release", function() {
//     led.off();
//     io.emit('Erelease');
//   });

//   btn4.on("hold", function() {
//     led.on();
//     io.emit('Fpress');
//   });

//   btn4.on("release", function() {
//     led.off();
//     io.emit('Frelease');
//   });

//   btn5.on("hold", function() {
//     led.on();
//     io.emit('Gpress');
//   });

//   btn5.on("release", function() {
//     led.off();
//     io.emit('Grelease');
//   });

//   btn6.on("hold", function() {
//     led.on();
//     io.emit('Apress');
//   });

//   btn6.on("release", function() {
//     led.off();
//     io.emit('Arelease');
//   });

//   btn7.on("hold", function() {
//     led.on();
//     io.emit('Bpress');
//   });

//   btn7.on("release", function() {
//     led.off();
//     io.emit('Brelease');
//   });

//   btn8.on("hold", function() {
//     led.on();
//     io.emit('C2press');
//   });

//   btn8.on("release", function() {
//     led.off();
//     io.emit('C2release');
//   });

});

