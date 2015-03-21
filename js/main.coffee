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

  $('.talk-description').readmore(
    collapsedHeight: 20
    blockCSS: 'font-size: 0.8em'
  )
