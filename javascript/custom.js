// Collapse navbar on link click
$('.navbar-nav>li>a').on('click', function(){
  $('.navbar-collapse').collapse('hide');
});

// $('.navbar-nav > li > a').on('click', function() {
//   $('.navbar-toggle').trigger('click');
// });

// $('.navbar-nav a').on('click', function () {
//   $(".navbar-toggle").click() //bootstrap 3.x 
// });

// $(".panel-heading").parent('.panel').hover(
//   function() {
//     $(this).children('.collapse').collapse('show');
//   }, function() {
//     $(this).children('.collapse').collapse('hide');
//   }
// );

$(document).ready(function() {   
  $(window).scroll( function() {
    $('.fide-in-right').each( function(i){
      var bottom_of_object = $(this).offset().top + $(this).outerHeight();
      var bottom_of_window = $(window).scrollTop() + $(window).height();

      if( bottom_of_window > bottom_of_object ){
        $(this).addClass("active");
      }
    }); 
  });
});


// $(document).ready(function() {   
//   /* Every time the window is scrolled ... */
//   $(window).scroll( function(){
//       /* Check the location of each desired element */
//       $('.hideme').each( function(i){
//           var bottom_of_object = $(this).offset().top + $(this).outerHeight();
//           var bottom_of_window = $(window).scrollTop() + $(window).height();
//           /* If the object is completely visible in the window, fade it it */
//           if( bottom_of_window > bottom_of_object + 200){
//               $(this).animate({left:200, opacity:"show"}, 1500);
//               // animate({'opacity':'1'}, 1000);
//           }
//       }); 
  
//   });
  
// });

$("#nav-fade0, #nav-fade1, #nav-fade2, #nav-fade3, #nav-fade4").hide().each(function(i) {
  $(this).delay(i*600).fadeIn(1500);
});
