// Function to check if an element is in the viewport
function isElementInViewport(element) {
  var rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

// Function to add the active class and trigger the animation
function activateLineGrowAnimation() {
  var linegrowElements = document.querySelectorAll(".linegrow");
  linegrowElements.forEach(function (element) {
    if (isElementInViewport(element)) {
      element.classList.add("active");
    }
  });
}

// Intersection Observer callback function
function handleIntersection(entries, observer) {
  entries.forEach(function (entry) {
    if (entry.isIntersecting) {
      entry.target.classList.add("active");
      observer.unobserve(entry.target);
    }
  });
}

// Create an Intersection Observer instance
var observer = new IntersectionObserver(handleIntersection);

// Observe the linegrow elements
var linegrowElements = document.querySelectorAll(".linegrow");
linegrowElements.forEach(function (element) {
  observer.observe(element);
});

// Trigger the animation for visible elements on page load
window.addEventListener("load", activateLineGrowAnimation);

// altra linea

function isElementInViewport(element) {
  var rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

function animateOnScroll() {
  var elements = document.getElementsByClassName("line");
  for (var i = 0; i < elements.length; i++) {
    if (isElementInViewport(elements[i])) {
      elements[i].classList.add("animate");
    }
  }
}

window.addEventListener("scroll", animateOnScroll);
