$(function() {
  var canvas = document.createElement("canvas");
  canvas.width = 24;
  canvas.height = 24; var centerX = canvas.width / 2;
  var centerY = canvas.height / 2;
  var radius = 10;
  var context = canvas.getContext("2d");
  context.beginPath();
  context.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);
  context.fillStyle = 'transparent';
  context.fill();
  context.lineWidth = 4;
  context.strokeStyle = '#292929';
  context.stroke();
  var dataURL = canvas.toDataURL('image/png');
  $('body').css('cursor', 'url('+dataURL+'), auto');

  context.strokeStyle = '#f9c80e';
  context.stroke();
  var dataURL = canvas.toDataURL('image/png');
  $('footer').css('cursor', 'url('+dataURL+'), auto');
});