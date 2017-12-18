$(document).ready(start);

var clickCounter = 0;

function start() {
  console.log('srced');

  // SUMMARY: Add a new div with buttons and styles on each "generate" button click
  $('#generate').on('click', function() {
    var newDiv = $('<div class="red"></div>');
    newDiv.append('<p>' + clickCounter++ + '</p>');
    newDiv.append('<button class="swap">Swap</button>');
    newDiv.append('<button class="delete">Delete</button>');
    $('#target').append(newDiv);
  });

  // SUMMARY: Add listener for swap buttons to change color
    $('#target').on('click', '.swap', function() {
      var thisDiv = $(this).closest('div');
      thisDiv.toggleClass('red');
      thisDiv.toggleClass('yellow');
    });
  // END

  // SUMMARY: Remove parent divs on clicking "delete"
    $('#target').on('click', '.delete', function() {
      $(this).closest('div').remove();
    });
  // END

}
