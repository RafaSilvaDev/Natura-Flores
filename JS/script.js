// função para o header
$(document).ready(function () {
  $(".menu-toggle").click(function () {
    $(".menu-toggle").toggleClass("active");
    $("nav").toggleClass("active");
  });
});

// função para slider na index
$(document).ready(function () {
  $("#autoWidth").lightSlider({
    autoWidth: true,
    loop: true,
    onSliderLoad: function () {
      $("#autoWidth").removeClass("cS-hidden");
    },
  });
});

// função para slider de produtos na págiga 'produtos'
var swiper = new Swiper(".swiper-container", {
  slidesPerView: 1.2,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
