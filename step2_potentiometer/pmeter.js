/*
 * In this step we will output the value of a potentiometer to the
 * console.
 */

var five = require("johnny-five");
var myBoard = new five.Board();

myBoard.on("ready", function() {

    var rgb = new five.Led.RGB({
        pins: {
            red: 11,
            green: 10,
            blue: 9
        }
    });

    var pmeter = new five.Sensor("A3");

    pmeter.on("change", function() {
        console.log("The value of the potentiometer is:" +this.value );
    });
});
