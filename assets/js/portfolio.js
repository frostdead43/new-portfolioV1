let currentIndex = 0;
const carouselTrack = document.querySelector('.carousel-track');
const carouselItems = document.querySelectorAll('.carousel-item');
const btn = document.querySelector('.btn');
const TrollArea = document.querySelector('.troll-area');
const totalItems = carouselItems.length;

document.querySelector('.carousel-button.next').addEventListener('click', () => {
  if (currentIndex < totalItems - 1) {
    currentIndex++;
  } else {
    currentIndex = 0; // Sonraki resim yoksa başa dön
  }
  updateCarousel();
});

document.querySelector('.carousel-button.prev').addEventListener('click', () => {
  if (currentIndex > 0) {
    currentIndex--;
  } else {
    currentIndex = totalItems - 1; // Önceki resim yoksa sona dön
  }
  updateCarousel();
});

function updateCarousel() {
  const offset = -currentIndex * 100; // Karusel kaydırma işlemi
  carouselTrack.style.transform = `translateX(${offset}%)`;
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

addGif();