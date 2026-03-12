// Animations
const myObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show", "show-btn");
    }
  });
});

const elements = document.querySelectorAll(".hidden");
const btn = document.querySelectorAll(".btn-a");

elements.forEach((element) => {
  myObserver.observe(element);
});
btn.forEach((element) => {
  myObserver.observe(element);
});
