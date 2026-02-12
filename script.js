const startBtn = document.getElementById("startBtn");
const intro = document.getElementById("intro");
const slideshow = document.getElementById("slideshow");
const slideImage = document.getElementById("slideImage");
const nextBtn = document.getElementById("nextBtn");
const finalMessage = document.getElementById("finalMessage");

let currentSlide = 1;
const totalSlides = 6;

startBtn.addEventListener("click", () => {
  intro.classList.add("hidden");
  slideshow.classList.remove("hidden");
});

nextBtn.addEventListener("click", () => {
  currentSlide++;

  if (currentSlide <= totalSlides) {
    slideImage.style.animation = "none";
    void slideImage.offsetWidth; // reinicia animación
    slideImage.src = `images/${currentSlide}.png`;
    slideImage.style.animation = "fadeZoom 1.5s ease";
  }

  if (currentSlide === totalSlides) {
    nextBtn.style.display = "none";
    finalMessage.classList.remove("hidden");
  }
  
});
// Generador de corazones animados
const heartsContainer = document.querySelector(".hearts");

function createHeart() {
  const heart = document.createElement("div");
  heart.classList.add("heart");
  heart.innerHTML = "❤";

  heart.style.left = Math.random() * 100 + "vw";
  heart.style.fontSize = Math.random() * 20 + 15 + "px";
  heart.style.animationDuration = Math.random() * 3 + 4 + "s";

  heartsContainer.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 7000);
}

// Genera corazones constantemente
setInterval(createHeart, 400);
