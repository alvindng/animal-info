
$(document).ready(function() {

// $(location).attr('href', 'insects.html');

$('h1').click(function() {

  alert('works')
  // $('a').triggerHandler('click');


});

  var animal = prompt('What animal do you want to learn about?');

  if (animal === "snakes") {
    $('a')[0].click();
  } else if (animal === "turtles") {
    $('a')[1].click();
  } else if (animal === "insects") {
    $('a')[2].click();
  } else {
    window.location.href = "http://www.google.com"
  }

});
