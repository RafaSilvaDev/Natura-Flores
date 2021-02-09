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

// função para swiper na página 'Produtos'
var swiper = new Swiper(".swiper-container", {
  slidesPerView: 1,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

// função para validação de campos
function numbers() {
  // apenas números no campo
  let key = event.keyCode;
  if (key >= 48 && key <= 57) {
    return true;
  } else {
    return false;
  }
}

function words() {
  // apenas letras no campo
  let key = event.keyCode;
  if (key >= 48 && key <= 57) {
    return false;
  } else {
    return true;
  }
}
