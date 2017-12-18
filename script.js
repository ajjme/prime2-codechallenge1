$(document).ready(start);

var clickCounter = 0;

function start() {
  console.log('srced');

  $('#generate').on('click', function() {
    var newDiv = $('<div id="div-' + clickCounter + '"></div>');
    newDiv.append('<p>' + clickCounter + '</p>');
    newDiv.append('<button id="swap">Swap</button>');
    newDiv.append('<button id="delete">Delete</button>');
    $('#target').append(newDiv);
    console.log(clickCounter);

    clickCounter++;
  });
}
