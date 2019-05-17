function calculateHeight() {
  var h = $(".footer-section").outerHeight();
  var section = $(".footer-section").prev();
  console.log(section);
  $(section).css({ "margin-bottom": h });
}

$(document).ready(() => {
  calculateHeight();
});

$(window).resize(() => {
  calculateHeight();
});
