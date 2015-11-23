var five = require("johnny-five");
var myBoard = new five.Board();


myBoard.on("ready", function() {
  var redLED = new five.Led(11);
  redLED.blink();
});

