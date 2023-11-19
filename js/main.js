$(document).ready(function () {
  $(".tesfamil_sloder_area").owlCarousel({
    autoplay: true,
    //   slideSpeed: 3000,
    loop: true,
    autoplayTimeout: 2000,
    autoplaySpeed: 1500,
    smartSpeed: 1500,
    lazyLoad: true,
    margin:1,
    dots: false,
    rtl: true,
    center: true,
    items: 3,
    responsive: {
      320: {
        items: 1,
      },
      767: {
        items: 2,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 3,
      },
    },
  });
});
// start loder
let lod = document.querySelector(".loader");
window.onload = function () {
  $(".loader").fadeOut(1000);
};
// end loder

$(document).ready(function () {
  $(".js-example-basic-multiple").select2();
});

//counter page voletion
$(document).ready(function () {
  "use strict";
  var ourcountdown = setInterval(function () {
    var counter = parseInt($("#countdown").html());
    if (counter !== 0) {
      $("#countdown").html(counter - 1);
    } else {
      clearInterval(ourcountdown);
      $("#countdown").html("00:00");
    }
  }, 1000);
});


//test
$(document).ready(function(){
  $(".notscloseone").click(function () {
    $(".mynoticesone").remove();
  });
  $(".notsclosetwo").click(function () {
    $(".mynoticestwo").remove();
  });
  $(".notsclosethree").click(function () {
    $(".mynoticesthree").remove();
  });
  $(".notsclosefour").click(function () {
    $(".mynoticesfour").remove();
  });
  $(".notsclosefif").click(function () {
    $(".mynoticesfif").remove();
  });
})