// Collapse navbar on link click
$('.navbar-nav>li>a').on('click', function(){
  $('.navbar-collapse').collapse('hide');
});

$(document).ready(function() {   
  $(window).scroll( function() {
    $('.slide-in-right-scroll').each( function(i){
      var bottom_of_object = $(this).offset().top + $(this).outerHeight();
      var bottom_of_window = $(window).scrollTop() + $(window).height();

      if( bottom_of_window > bottom_of_object ){
        $(this).addClass("active");
      }
    }); 
  });
});

$("#nav-fade1, #nav-fade2, #nav-fade3, #nav-fade4").hide().each(function(i) {
  $(this).delay(i*600).fadeIn(1500);
});