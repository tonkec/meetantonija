$(window).bind("load", function() {
  $("body").addClass("no-scroll");
  $(".spinner").fadeOut(200, () => {
    $("body").removeClass("no-scroll");
  });

  $(".btn-nav, .btn-close").click(() => {
    $(".nav").toggleClass("nav-shown");
    $("body, html").toggleClass("no-scroll");
  });
});
