$(function () {

  /*hamburger*/

  $(".hamburger").on("click", function (e) {
      e.preventDefault();
      $(this).toggleClass("open");
      $("header .menu").toggleClass("open");
  });



  new WOW().init();

  $('.parallax-window').each(function () {
    $(this).parallax();
  });
});
