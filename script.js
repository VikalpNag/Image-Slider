let currentSlide = 0;
let slides = document.querySelectorAll(".slide");
let prevBtn = document.querySelector(".prev");
let nextBtn = document.querySelector(".next");

nextBtn.addEventListener("click", function () {
  let nextSlide = (currentSlide + 1) % slides.length;
  slides[currentSlide].style.display = "none";
  slides[nextSlide].style.display = "block";
  currentSlide = nextSlide;
});

prevBtn.addEventListener("click", function () {
  let prevSlide = currentSlide == 0 ? slides.length - 1 : currentSlide - 1;
  slides[currentSlide].style.display = "none";
  slides[prevSlide].style.display = "block";
  currentSlide = prevSlide;
});
