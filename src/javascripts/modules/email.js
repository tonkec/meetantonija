$("#form").on("submit", function(event) {
  event.preventDefault(); // prevent reload
  $(".msg").show();
  $(".msg").append(`
    <span class="text">Sending...</span> <span class="float-right x">&#x2716;</span>
  `)
  var formData = new FormData(this);
  formData.append('service_id', 'gmail');
  formData.append('template_id', 'template_4cXwGrgd');
  formData.append('user_id', 'user_LOSuz8pR7cowgxlm0LOa5');

  $.ajax('https://api.emailjs.com/api/v1.0/email/send-form', {
      type: 'POST',
      data: formData,
      contentType: false, // auto-detection
      processData: false // no need to parse formData to string
  }).done(function() {
      $(".text").replaceWith(`
        Message Sent! I will get back to you soon 🧙
      `)
      $(".x").click(() => {$(".msg").remove()})
  }).fail(function(error) {
      console.log('Oops... ' + JSON.stringify(error));
  });
});
