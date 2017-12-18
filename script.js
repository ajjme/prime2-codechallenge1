$(document).ready(start);

var clickCounter = 0;

function start() {
  console.log('srced');

  $('#generate').on('click', function() {
    $('#target').append('<div id="div-' + clickCounter + '"></div>');
    $('$div-' + clickCounter).append('<p></p>');
    clickCounter++;
    console.log(clickCounter);
  });
}
