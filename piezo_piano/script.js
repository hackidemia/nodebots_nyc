$(document).on('ready', function() {

  console.log('Jquery is loaded and ready');

  $('button').on('click', function() {
    console.log('you clicked the ' + $(this).attr('value') + ' button!');
    
    //sends the note back to the server/arduino 
    $.get( "/button?note="+$(this).attr('value') );
    
  });

});