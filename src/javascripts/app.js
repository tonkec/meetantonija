import "modules/cursor";
import "modules/email";
import "modules/footer";

$(window).bind("load", function() {
  $("body").addClass("no-scroll");
  $('.spinner').fadeOut(500, () => {
    $("body").removeClass("no-scroll");
  });
});
