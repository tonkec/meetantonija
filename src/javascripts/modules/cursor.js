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
