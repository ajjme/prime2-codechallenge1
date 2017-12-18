$(document).ready(start);

function start() {
  console.log('srced');

  $('#generate').on('click', function() {
    $('#target').append('<div>hi</div>');
  });
}
