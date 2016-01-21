'use strict'
var express = require('express'),
   j5 = require("johnny-five")

var app = express(),
   board = new j5.Board(),
   piezo;


board.on("ready", function() {
  // Creates a piezo object and defines the pin to be used for the signal
  piezo = new five.Piezo(3);

  // Injects the piezo into the repl
  board.repl.inject({
    piezo: piezo
  });
});

app.listen(3000);

app.use(express.static(__dirname));

app.get('/', function(req, res) {
  //sends the main page
  res.sendFile(__dirname + '/index.html');
});

app.get('/button', function(req, res) {
    //gets the note from the request's query string
    var note = req.query.note;
    console.log('note', note);

    //piezo plays the note
    piezo.play({
      song: [
        [note+"4", 1]
      ],
      tempo: 100
    });

    res.end();
});

//we could record the buttons/notes and add them to an array and then play them when you press play!!!!
//  :D
// The keys can also be mapped to a note as well, I just didn't have time.



