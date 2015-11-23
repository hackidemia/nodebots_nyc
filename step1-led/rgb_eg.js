var five = require("johnny-five");


five.Board().on("ready", function() {

  // Initialize the RGB LED
  //you can choose any PMW pins make sure they have ~ next to #
  var led = new five.Led.RGB({
    pins: {
      red: 11,
      green: 10,
      blue: 9
    }
  });

  // this allows you to control board from terminal after
  this.repl.inject({
    led: led
  });

  // Turn it on and set the initial color
  led.on();
  led.color("#FF0000");
  //change the color to pink 

  led.blink(500);

});
