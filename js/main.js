$( document ).ready(function() {
  $('.menu-link').click(function(){
    if($('.home-menu').hasClass('active')) {
      $('.home-menu').removeClass('active');
    } else {
      $('.home-menu').addClass('active');
    }
  });

  $('.home-menu a').click(function(){
    $('.home-menu').removeClass('active');
  });
});
