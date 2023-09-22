const numeriProofs = document.querySelectorAll(".numeri-proof");
const fadeOutElement = document.querySelector(".fade-out");

window.addEventListener("scroll", function () {
  const distanceFromTop = window.pageYOffset;

  if (distanceFromTop > window.innerHeight) {
    numeriProofs.forEach(function (element) {
      element.style.opacity = 1;
    });

    fadeOutElement.classList.add("fade-in");
  }
});
