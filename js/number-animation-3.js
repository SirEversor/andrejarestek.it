// Function to animate the numbers from 0 to the target value
function animateNumber(element, targetNumber, duration) {
  if (element.hasAnimated) return; // Check if animation has already been played

  let currentNumber = 0;
  const steps = 100; // Increase the number of steps
  const stepDuration = duration / steps;
  const stepValue = targetNumber / steps;

  function updateNumber() {
    currentNumber += stepValue;
    if (currentNumber >= targetNumber) {
      element.textContent = targetNumber; // Set the final value
      element.hasAnimated = true; // Set the flag to true once animation is complete
    } else {
      element.textContent = Math.round(currentNumber);
      setTimeout(updateNumber, stepDuration);
    }
  }

  setTimeout(updateNumber, stepDuration);
}

// Function to check if an element is visible in the viewport
function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

// Function to handle the scroll event
function handleScroll() {
  const award1 = document.getElementById("award1");
  const award2 = document.getElementById("award2");
  const award3 = document.getElementById("award3");

  if (isInViewport(award1)) {
    animateNumber(document.getElementById("nbr1"), 15, 2000); // 2000ms duration for nbr1 (slower)
  }

  if (isInViewport(award2)) {
    animateNumber(document.getElementById("nbr2"), 20, 1500); // 1500ms duration for nbr2
  }

  if (isInViewport(award3)) {
    animateNumber(document.getElementById("nbr3"), 5000, 3000); // 3000ms duration for nbr3 (slower)
  }
}

// Set hasAnimated property to false initially for all award numbers
document.getElementById("nbr1").hasAnimated = false;
document.getElementById("nbr2").hasAnimated = false;
document.getElementById("nbr3").hasAnimated = false;

// Add the event listener for the scroll event
window.addEventListener("scroll", handleScroll);

// Call handleScroll initially to check for elements in the viewport on page load
handleScroll();
