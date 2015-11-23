var five = require("johnny-five");
var myBoard = new five.Board();


myBoard.on("ready", function() {
  var redLED = new five.Led(11);
  var greenLED = new five.Led(12);
  var yellowLED = new five.Led(13);

    /*Potientiometer*/
    var pmeter = new five.Sensor("A0");

    pmeter.on("change", function() {
        // this.value will reflect a scaling from 0-1023 to 0-180
        console.log( this.value );
        greenLED.on();
    });
});


/*Press a green button in UI to toggle button, turn it off, or turn it on*/
/*Also create random events that will change the color of the LED
 and have our program track these changes.
 *To do this with express
 */
