function calculateHeight() {
  var e = $(".footer-section").outerHeight(),
    t = $(".footer-section").prev();
  $(t).css({ "margin-bottom": e });
}
$(function() {
  var e = document.createElement("canvas");
  (e.width = 24), (e.height = 24);
  var t = e.width / 2,
    o = e.height / 2,
    a = e.getContext("2d");
  a.beginPath(),
    a.arc(t, o, 10, 0, 2 * Math.PI, !1),
    (a.fillStyle = "transparent"),
    a.fill(),
    (a.lineWidth = 4),
    (a.strokeStyle = "#292929"),
    a.stroke();
  var n = e.toDataURL("image/png");
  $("body, .left").css("cursor", "url(" + n + "), auto"),
    (a.strokeStyle = "#f9c80e"),
    a.stroke();
  var s = e.toDataURL("image/png");
  $("footer, .right, .portfolio-header, .portfolio-image-section").css(
    "cursor",
    "url(" + s + "), auto"
  );
}),
  $(".btn-nav, .btn-close").click(() => {
    $(".btn-nav").text((e, t) => ("MENU" === t ? "CLOSE" : "MENU")),
      $("body, html").toggleClass("no-scroll"),
      $(".left, .right").toggleClass("show");
  }),
  $("#form").on("submit", function(e) {
    e.preventDefault(),
      $(".msg").show(),
      $(".msg").append('\n    <span class="text">Sending...</span>\n  ');
    var t = new FormData(this);
    t.append("service_id", "gmail"),
      t.append("template_id", "template_4cXwGrgd"),
      t.append("user_id", "user_LOSuz8pR7cowgxlm0LOa5"),
      $.ajax("https://api.emailjs.com/api/v1.0/email/send-form", {
        type: "POST",
        data: t,
        contentType: !1,
        processData: !1
      })
        .done(function() {
          $(".text").replaceWith(
            "\n        Message Sent! I will get back to you soon 🕶\n      "
          );
        })
        .then(() => {
          setTimeout(() => {
            $(".msg").remove();
          }, 4e3);
        })
        .fail(function(e) {
          console.log("Oops... " + JSON.stringify(e));
        });
  }),
  $(document).ready(() => {
    calculateHeight();
  }),
  $(window).resize(() => {
    calculateHeight();
  }),
  $(window).bind("load", function() {
    $("body").addClass("no-scroll"),
      $(".spinner").fadeOut(200, () => {
        $("body").removeClass("no-scroll");
      });
  });
