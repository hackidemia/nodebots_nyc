/*
 * Modified from: https://github.com/Resseguie/Cheerful-J5/blob/master/cheerful.js
 */

var request = require("request"),
    five = require("johnny-five"),
    colorMap = require("./cheerlights_colors.js"),
    board = new five.Board(),
    pins;

board.on("ready", function() {

    var lastColor = "white",
        led = new five.Led.RGB(pins);

    this.repl.inject({
        led: led
    });

    led.color( colorMap[lastColor] );

    setInterval(function() {
        getLatestColor(function(err, color) {
            if ( !err && colorMap[color] ) {
                if ( color != lastColor ) {
                    lastColor = color;
                    console.log( "Changing to " + color );
                    led.color( colorMap[color] );
                }
            }
        });
    }, 3000);

});

function getLatestColor(callback) {
    request(
        {
            url: "https://api.thingspeak.com/channels/1417/feed/last.json",
            json: true
        }, function (error, response, body) {

            if ( !error && response.statusCode === 200 ) {
                var color = body.field1;
                callback(null, color);
            } else {
                callback(error, null);
            }
        }
    );
}
