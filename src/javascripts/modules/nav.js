$(".btn-nav, .btn-close").click(() => {
  $(".nav").toggleClass("nav-shown");
  $("body, html").toggleClass("no-scroll");
});
