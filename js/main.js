(function() {
  $(document).ready(function() {
    $(".menu-link").click(function() {
      if ($(".home-menu").hasClass("active")) {
        return $(".home-menu").removeClass("active");
      } else {
        return $(".home-menu").addClass("active");
      }
    });
    $(".home-menu a").click(function() {
      return $(".home-menu").removeClass("active");
    });
    return $('.talk-description').readmore({
      collapsedHeight: 20,
      blockCSS: 'font-size: 0.8em'
    });
  });

}).call(this);
