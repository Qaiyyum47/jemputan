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


            document.getElementById("rsvp-form").addEventListener("submit", function (e) {
                e.preventDefault();
                const form = e.target;
                const data = new FormData(form);

                fetch("https://docs.google.com/forms/d/e/1FAIpQLSfpb6SGSTtJ7RuyJQ1dFrcl8XJ_zci-QMTnm1jt1eBkKTDxug/formResponse", {
                method: "POST",
                mode: "no-cors",
                body: data,
                });

                form.reset();
                document.getElementById("rsvp-success").style.display = "block";
            });

            let startX = 0;
let endX = 0;

const carouselElement = document.querySelector(".carousel-wrapper");

carouselElement.addEventListener("touchstart", (e) => {
  startX = e.touches[0].clientX;
});

carouselElement.addEventListener("touchend", (e) => {
  endX = e.changedTouches[0].clientX;
  handleSwipe();
});

function handleSwipe() {
  if (startX - endX > 50) {
    // Swipe left
    currentSlide = (currentSlide + 1) % slides.length;
    updateCarousel();
  } else if (endX - startX > 50) {
    // Swipe right
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    updateCarousel();
  }
}

fetch("https://script.google.com/macros/s/AKfycbyM_Mf7dah7Z2E6-YIhe74pQ2dH4UaYwNpfLdQde4dr-mzSbtn088x-aVit-XmVYN7l7g/exec")
  .then(res => res.json())
  .then(data => {
    const list = document.getElementById("ucapan-list");
    const count = document.getElementById("guest-count");

    const createEntry = (item) => {
      const p = document.createElement("p");
      p.innerHTML = `<strong>${item.name}</strong><br>${item.message}`;
      return p;
    };

    for (let i = 0; i < 2; i++) {
      data.forEach(item => list.appendChild(createEntry(item)));
    }

    list.style.animationDuration = `${list.scrollHeight / 30}s`;
    count.textContent = `${data.length + 50}`;
  })
  .catch(err => console.error("Failed to fetch ucapan:", err));

const weddingDate = new Date("2025-08-30T11:00:00").getTime();
                        function updateCountdown() {
                            const now = new Date().getTime();
                            const distance = weddingDate - now;
                            if (distance < 0) {
                                ["days", "hours", "minutes", "seconds"].forEach(id => {
                                    document.getElementById(id).textContent = "0";
                                });
                                return;
                            }
                            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
                            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
                            const seconds = Math.floor((distance % (1000 * 60)) / 1000);
                            document.getElementById("days").textContent = days;
                            document.getElementById("hours").textContent = hours;
                            document.getElementById("minutes").textContent = minutes;
                            document.getElementById("seconds").textContent = seconds;
                        }
                        updateCountdown();
                        setInterval(updateCountdown, 1000);