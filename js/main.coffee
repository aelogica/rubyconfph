---
---

$(document).ready ->
  $(".menu-link").click ->
    if $(".home-menu").hasClass("active")
      $(".home-menu").removeClass "active"
    else
      $(".home-menu").addClass "active"

  $(".home-menu a").click ->
    $(".home-menu").removeClass "active"
