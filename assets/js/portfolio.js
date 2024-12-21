const btn = document.querySelector('.btn');
const TrollArea = document.querySelector('.troll-area');


function setCarousel(){
  $(document).ready(function(){
    $('.carousel-images').slick({
      dots: true,            // Altında noktalar gösterilsin
      infinite: true,        // Sonsuz kaydırma
      speed: 400,            // Geçiş hızı
      slidesToShow: 1,       // Her seferinde 1 resim göster
      slidesToScroll: 1,     // Her seferinde 1 resim kaydır
      autoplay: false,        // Otomatik oynatma
      autoplaySpeed: 8000,   // Her iki saniyede bir kaydırma
      arrows: false,          // Ok butonları
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
    TrollArea.classList.remove("hearts");
  });
}

function addTransitionPic() {
  document.addEventListener("DOMContentLoaded", () => {
    const aboutSection = document.querySelector(".about");
    const myPic = document.querySelector(".my-pic");
  
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          myPic.style.opacity = "1";
          myPic.style.transform = "translateY(0)";
          observer.unobserve(entry.target); 
        }
      });
    }, {
      threshold: 0.5,
    });
    observer.observe(aboutSection);
  });
}


function setParallax() {
  window.addEventListener('scroll', function() {
    const section = document.getElementById('parallax');
    const scrollPosition = window.scrollY;
  
    // Arka planın kayma hızını ayarlayın
    section.style.backgroundPosition = 'center ' + (scrollPosition * 0.5) + 'px';
  });
}

function init() {
  setCarousel();
  addGif();
  addTransitionPic();
  setParallax();
}
init();