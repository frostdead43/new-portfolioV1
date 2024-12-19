const btn = document.querySelector('.btn');
const TrollArea = document.querySelector('.troll-area');


function setCarousel(){
  $(document).ready(function(){
    // Carousel'i başlat
    $('.carousel-images').slick({
      dots: true,            // Altında noktalar gösterilsin
      infinite: true,        // Sonsuz kaydırma
      speed: 400,            // Geçiş hızı
      slidesToShow: 1,       // Her seferinde 1 resim göster
      slidesToScroll: 1,     // Her seferinde 1 resim kaydır
      autoplay: true,        // Otomatik oynatma
      autoplaySpeed: 8000,   // Her iki saniyede bir kaydırma
      arrows: true,          // Ok butonları
    });
  });
}

function addGif() {
  btn.addEventListener("click", function() {
    let gif = document.createElement('img');
    TrollArea.innerHTML = '';
    gif.src = 'assets/images/you-gif.gif';
    gif.alt = 'Troll GIF';
    gif.width = 300; 
    gif.height = 200;
    gif.style.marginInline = 'auto';
    TrollArea.appendChild(gif);
  });
}



function init() {
  setCarousel();
  addGif();
}

init();