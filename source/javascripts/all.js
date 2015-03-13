//= require_tree .
$(document).ready(function () {
  // Handler for .ready() called.
  $('.scroll').click(function () {
    $('html, body').animate({
      scrollTop: $('.second').offset().top
    }, 'slow');
  });
});
