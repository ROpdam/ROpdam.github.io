$(".panel-heading").parent('.panel').hover(
  function() {
    $(this).children('.collapse').collapse('show');
  }, function() {
    $(this).children('.collapse').collapse('hide');
  }
);
$(document).ready(function() {
  $('.template-article img').each(function() {
      var currentImage = $(this);
      currentImage.wrap("<a class='image-link' href='" + currentImage.attr("src") + "'</a>");
  });
  $('.image-link').magnificPopup({type:'image'});  
});
