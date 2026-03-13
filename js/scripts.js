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

// Color switch
const buttons = document.querySelectorAll("#image-picker li");
const image = document.querySelector("#product-image");

buttons.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    console.log(e);

    buttons.forEach((btn) => {
      btn.querySelector(".color").classList.remove("selected");
    });

    const button = e.target;
    const id = button.getAttribute("id");

    button.querySelector(".color").classList.add("selected");

    image.classList.add("changing");
    image.setAttribute("src", `img/iphone_${id}.webp`);

    setTimeout(() => {
      image.classList.toggle("changing");
    }, 100);
  });
});
