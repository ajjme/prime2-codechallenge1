$(document).ready(start);

var clickCounter = 0;

function start() {
  console.log('srced');

  $('#generate').on('click', function() {
    $('#target').append('<div>hi</div>');
    clickCounter++;
    console.log(clickCounter);
  });
}
