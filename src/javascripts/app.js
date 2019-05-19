$(function() {
  var canvas = document.createElement("canvas");
  canvas.width = 24;
  canvas.height = 24;
  var centerX = canvas.width / 2;
  var centerY = canvas.height / 2;
  var radius = 10;
  var context = canvas.getContext("2d");
  context.beginPath();
  context.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);
  context.fillStyle = "transparent";
  context.fill();
  context.lineWidth = 4;
  context.strokeStyle = "#292929";
  context.stroke();
  var dataURLBlack = canvas.toDataURL("image/png");
  $("body, nav .left").css("cursor", "url(" + dataURLBlack + "), auto");

  context.strokeStyle = "#f9c80e";
  context.stroke();
  var dataURLYellow = canvas.toDataURL("image/png");
  $("footer, .nav").css("cursor", "url(" + dataURLYellow + "), auto");
});

$(".btn-nav, .btn-close").click(() => {
  $(".nav").toggleClass("nav-shown");
  $("body, html").toggleClass("no-scroll");
});

$("#form").on("submit", function(event) {
  event.preventDefault(); // prevent reload
  $(".msg").show();
  $(".msg").append(`
    <span class="text">Sending...</span> <span class="float-right x">&#x2716;</span>
  `);
  var formData = new FormData(this);
  formData.append("service_id", "gmail");
  formData.append("template_id", "template_4cXwGrgd");
  formData.append("user_id", "user_LOSuz8pR7cowgxlm0LOa5");

  $.ajax("https://api.emailjs.com/api/v1.0/email/send-form", {
    type: "POST",
    data: formData,
    contentType: false, // auto-detection
    processData: false // no need to parse formData to string
  })
    .done(function() {
      $(".text").replaceWith(`
        Message Sent! I will get back to you soon 🕶
      `);
      $(".x").click(() => {
        $(".msg").remove();
      });
    })
    .fail(function(error) {
      console.log("Oops... " + JSON.stringify(error));
    });
});

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

$(window).bind("load", function() {
  $("body").addClass("no-scroll");
  $(".spinner").fadeOut(200, () => {
    $("body").removeClass("no-scroll");
  });
});
