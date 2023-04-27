// elements
var elements_to_watch = document.querySelectorAll(".watch");

// callback
var callback = function (items) {
  items.forEach((item) => {
    if (item.isIntersecting) {
      item.target.classList.add("in-page");
    } else {
      item.target.classList.remove("in-page");
    }
  });
};

// observer
var observer = new IntersectionObserver(callback, { threshold: 0.6 });

// apply
elements_to_watch.forEach((element) => {
  observer.observe(element);
});

// Select the title element
const title = document.querySelector(".title");

// Get the position of the title element
const titlePosition = title.getBoundingClientRect().top;

// Get the height of the window
const windowHeight = window.innerHeight;

// Listen for the scroll event
window.addEventListener("scroll", function () {
  // Get the current scroll position
  const currentPosition = window.pageYOffset;

  // Check if the title is in the viewport
  if (titlePosition < currentPosition + windowHeight) {
    // If it is, add the in-page class to the title
    title.classList.add("in-page");
  }
});

//  prova a correggere il perchè il typing animation non fa fade out
