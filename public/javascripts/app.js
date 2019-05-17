$(window).bind("load", function() {
  $("body").addClass("no-scroll");
  $(".spinner").fadeOut(200, () => {
    $("body").removeClass("no-scroll");
  });
});
