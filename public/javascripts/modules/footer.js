function calculateHeight() {
  var h = $(".footer-section").outerHeight();
  $(".contact-section").css({ "margin-bottom": h });
}

$(document).ready(() => {
  calculateHeight();
});

$(window).resize(() => {
  calculateHeight();
});
