function toggleSection(sectionId) {
    closePopup(); // Close any open popup first
    document.getElementById('popup-overlay').classList.add('active');
    document.getElementById('popup-' + sectionId).classList.add('active');
}

function closePopup() {
    document.getElementById('popup-overlay').classList.remove('active');
    const popups = document.querySelectorAll('.popup-section');
    popups.forEach(p => p.classList.remove('active'));
}



  let currentSlide = 0;
  const slides = document.querySelectorAll(".carousel img");
  const dots = document.querySelectorAll(".dot");

  function setSlide(index) {
    currentSlide = index;
    updateCarousel();
  }

  function updateCarousel() {
    const carousel = document.querySelector(".carousel");
    carousel.style.transform = `translateX(-${currentSlide * 80}vw)`;
    dots.forEach(dot => dot.classList.remove("active"));
    dots[currentSlide].classList.add("active");
  }

  function autoSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    updateCarousel();
  }

  setInterval(autoSlide, 3000);

