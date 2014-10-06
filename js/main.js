$( document ).ready(function() {
  $('.menu-link').click(function(){
    if($('.home-menu').hasClass('active')) {
      $('.home-menu').removeClass('active');
    } else {
      $('.home-menu').addClass('active');
    }
  });

  $('.home-menu a').click(function(){
    console.log("clicked");
    $('.home-menu').removeClass('active');
  });
});
