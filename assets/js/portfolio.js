const btn = document.querySelector('.btn');
const TrollArea = document.querySelector('.troll-area');


function setCarousel(){
  $(document).ready(function(){
    $('.carousel-images').slick({
      dots: true,            
      infinite: true,       
      speed: 400,           
      slidesToShow: 1,      
      slidesToScroll: 1,    
      autoplay: true,       
      autoplaySpeed: 6000,   
      arrows: false,     
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