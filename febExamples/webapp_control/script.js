$(document).on('ready', function() {

  console.log('jquery is loaded and ready');

  $('button').on('click', function() {
    console.log('you clicked the button!');
    $.get( "/button" );
    
  });

});