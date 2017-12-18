$(document).ready(start);

var clickCounter = 0;

function start() {
  console.log('srced');

  $('#generate').on('click', function() {
    var newDiv = $('<div id="div-' + clickCounter + '"></div>');
    newDiv.append('<p>' + clickCounter + '</p>');
    $('#target').append(newDiv);
    console.log(clickCounter);

    clickCounter++;
  });
}
