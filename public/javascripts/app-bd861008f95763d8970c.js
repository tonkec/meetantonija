!(function(t) {
  function e(o) {
    if (n[o]) return n[o].exports;
    var r = (n[o] = { i: o, l: !1, exports: {} });
    return t[o].call(r.exports, r, r.exports, e), (r.l = !0), r.exports;
  }
  var n = {};
  (e.m = t),
    (e.c = n),
    (e.d = function(t, n, o) {
      e.o(t, n) ||
        Object.defineProperty(t, n, {
          configurable: !1,
          enumerable: !0,
          get: o
        });
    }),
    (e.n = function(t) {
      var n =
        t && t.__esModule
          ? function() {
              return t.default;
            }
          : function() {
              return t;
            };
      return e.d(n, "a", n), n;
    }),
    (e.o = function(t, e) {
      return Object.prototype.hasOwnProperty.call(t, e);
    }),
    (e.p = "javascripts/"),
    e((e.s = 0));
})([
  function(t, e, n) {
    t.exports = n(1);
  },
  function(t, e) {
    $(document).ready(function() {
      function t() {
        var t = $(".footer-section").outerHeight(),
          e = $(".footer-section").prev();
        $(e).css({ "margin-bottom": t });
      }
      t(),
        $(".left, .right").show(),
        $(function() {
          var t = document.createElement("canvas");
          (t.width = 24), (t.height = 24);
          var e = t.width / 2,
            n = t.height / 2,
            o = t.getContext("2d");
          o.beginPath(),
            o.arc(e, n, 10, 0, 2 * Math.PI, !1),
            (o.fillStyle = "transparent"),
            o.fill(),
            (o.lineWidth = 4),
            (o.strokeStyle = "#292929"),
            o.stroke();
          var r = t.toDataURL("image/png");
          $("body, .left").css("cursor", "url(" + r + "), auto"),
            (o.strokeStyle = "#f9c80e"),
            o.stroke();
          var a = t.toDataURL("image/png");
          $("footer, .right, .portfolio-header, .portfolio-image-section").css(
            "cursor",
            "url(" + a + "), auto"
          );
        }),
        $(".btn-nav, .btn-close").click(function() {
          $(".btn-nav").text(function(t, e) {
            return "MENU" === e ? "CLOSE" : "MENU";
          }),
            $("body, html").toggleClass("no-scroll"),
            $(".left, .right").toggleClass("show");
        }),
        $("#form").on("submit", function(t) {
          t.preventDefault(),
            $(".msg").show(),
            $(".msg").append(
              '\n      <span class="text">Sending...</span>\n    '
            );
          var e = new FormData(this);
          e.append("service_id", "gmail"),
            e.append("template_id", "template_4cXwGrgd"),
            e.append("user_id", "user_LOSuz8pR7cowgxlm0LOa5"),
            $.ajax("https://api.emailjs.com/api/v1.0/email/send-form", {
              type: "POST",
              data: e,
              contentType: !1,
              processData: !1
            })
              .done(function() {
                $(".text").replaceWith(
                  "\n          Message Sent! I will get back to you soon 🕶\n        "
                );
              })
              .then(function() {
                setTimeout(function() {
                  $(".msg").remove();
                }, 4e3);
              })
              .fail(function(t) {
                console.log("Oops... " + JSON.stringify(t));
              });
        }),
        $("body").addClass("no-scroll"),
        $(".spinner").fadeOut(200, function() {
          $("body").removeClass("no-scroll");
        }),
        $(window).resize(function() {
          t();
        });
    });
  }
]);
