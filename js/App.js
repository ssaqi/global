$(document).ready(function () {
    $("#news-slider").owlCarousel({
      items: 3,
      itemsDesktop: [1199, 3],
      itemsDesktopSmall: [980, 2],
      itemsMobile: [600, 1],
      navigation: true,
      navigationText: ["", ""],
      pagination: true,
      autoPlay: true
    });
  });


  AOS.init({
    duration: 1100,
  })

  const talkBtn = document.getElementById('talkBtn');
  const resultDiv = document.getElementById('result');
  console.log("dadsadasd====>>",resultDiv)
  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  const recognition = new SpeechRecognition();
  recognition.onstart = function() {
      resultDiv.textContent = 'Listening...';
  };
  recognition.onspeechend = function() {
      recognition.stop();
  };
  recognition.onresult = function(event) {
      const current = event.resultIndex;
      const transcript = event.results[current][0].transcript;
      resultDiv.textContent = transcript;
  };
  talkBtn.addEventListener('click', () => {
      recognition.start();
  });






  var multipleCardCarousel = document.querySelector("#carouselExampleControls");

if (window.matchMedia("(min-width: 576px)").matches) {
  var carousel = new bootstrap.Carousel(multipleCardCarousel, {
    interval: false
  });
  var carouselWidth = $(".carousel-inner")[0].scrollWidth;
  var cardWidth = $(".carousel-item").width();
  var scrollPosition = 0;
  $("#carouselExampleControls .carousel-control-next").on("click", function () {
    if (scrollPosition < carouselWidth - cardWidth * 3) {
      scrollPosition += cardWidth;
      $("#carouselExampleControls .carousel-inner").animate(
        { scrollLeft: scrollPosition },
        600
      );
    }
  });
  $("#carouselExampleControls .carousel-control-prev").on("click", function () {
    if (scrollPosition > 0) {
      scrollPosition -= cardWidth;
      $("#carouselExampleControls .carousel-inner").animate(
        { scrollLeft: scrollPosition },
        600
      );
    }
  });
} else {
  $(multipleCardCarousel).addClass("slide");
}
