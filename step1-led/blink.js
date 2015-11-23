var five = require("johnny-five");
var myBoard = new five.Board();


myBoard.on("ready", function() {
    /*Define a pin object*/
    var redLED = new five.Led(11);
    var greenLED = new five.Led(12);
    var yellowLED = new five.Led(13);
});

