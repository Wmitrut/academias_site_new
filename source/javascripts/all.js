//= require_tree .

if ('addEventListener' in document) {
  document.addEventListener('DOMContentLoaded', function() {
    FastClick.attach(document.body);
  }, false);
}

$(function() {
  FastClick.attach(document.body);
});

$(document).ready(function () {
  // Handler for .ready() called.
  $('.scroll').click(function () {
    $('html, body').animate({
      scrollTop: $('.second').offset().top
    }, 'slow');
  });
});



$(document).ready(function(){
  var width = document.getElementById('testimonial').offsetWidth;
  if (width < 600) {
    $("#id").addClass(".owl-carousel");
    $("#id").removeClass(".col-md-4");
    $("#testimonial").owlCarousel({
      items : 1,
      autoPlay : false,
      responsive: true,
      mouseDrag : true,
      touchDrag : true,
      pagination : true,
      singleItem:true,
      slideSpeed : 300,
      paginationSpeed : 400
    });
  } else {
    $("#id").removeClass(".owl-carousel");
    $("#id").addClass(".col-md-4");
  }
  console.log(width);
});





$(document).ready(function(){
  var isOnScreen = function(elem){
    var win = $(window);

    var viewport = {
      top : win.scrollTop(),
      left : win.scrollLeft()
    };
    viewport.right = viewport.left + win.width();
    viewport.bottom = viewport.top + win.height();

    var bounds = elem.offset();
    bounds.right = bounds.left + elem.outerWidth();
    bounds.bottom = bounds.top + elem.outerHeight();

    return (!(viewport.right < bounds.left || viewport.left > bounds.right || viewport.bottom < bounds.top || viewport.top > bounds.bottom));

  };
  $(window).scroll(function(){
    $('.Count').each(function(i, elem) {
      elem = $(elem);
      if (isOnScreen(elem)) {
        if (!elem.hasClass("animated")) {
          elem.addClass("animated");
          var self = $(elem);
          jQuery({ Counter: 0 }).animate({ Counter: self.text() }, {
            duration: 1000,
            easing: 'swing',
            step: function () {
              self.text(Math.ceil(this.Counter));
            }
          });
        }
      }
    });
  });
});
