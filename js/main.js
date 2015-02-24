(function() {
  $(document).ready(function() {
    $(".menu-link").click(function() {
      if ($(".home-menu").hasClass("active")) {
        return $(".home-menu").removeClass("active");
      } else {
        return $(".home-menu").addClass("active");
      }
    });
    return $(".home-menu a").click(function() {
      return $(".home-menu").removeClass("active");
    });
  });

}).call(this);
