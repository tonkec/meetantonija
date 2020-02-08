$(document).ready(() => {
  calculateHeight();

  $(".left, .right").show();

  $(".btn-nav, .btn-close").click(() => {
    $(".btn-nav").text((i, text) => (text === "MENU" ? "CLOSE" : "MENU"));
    $("body, html").toggleClass("no-scroll");
    $(".left, .right").toggleClass("show");
  });

  (function() {
    emailjs.init("user_LOSuz8pR7cowgxlm0LOa5");
  })();

  $("#form").on("submit", function(event) {
    event.preventDefault(); // prevent reload
    $(".msg").show();
    $(".msg").append(`
      <span class="text">Sending...</span>
    `);
    var formData = new FormData(this);
    formData.append("service_id", "default_service");
    formData.append("template_id", "meetantonija");
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
      })
      .then(() => {
        setTimeout(() => {
          $(".msg").remove();
        }, 4000);
      })
      .fail(function(error) {
        console.log("Oops... " + JSON.stringify(error));
      });
  });

  function calculateHeight() {
    var h = $(".footer-section").outerHeight();
    var section = $(".footer-section").prev();
    $(section).css({ "margin-bottom": h });
  }

  $("body").addClass("no-scroll");
  $(".spinner").fadeOut(200, () => {
    $("body").removeClass("no-scroll");
  });

  $(window).resize(() => {
    calculateHeight();
  });
});
