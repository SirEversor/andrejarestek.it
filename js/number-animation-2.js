var speed = 80;

/* Call this function with a string containing the ID name to
 * the element containing the number you want to do a count animation on.*/
function incEltNbr(id) {
  elt = document.getElementById(id);
  endNbr = Number(document.getElementById(id).innerHTML);
  incNbrRec(0, endNbr, elt);
}

/*A recursive function to increase the number.*/
function incNbrRec(i, endNbr, elt) {
  if (i <= endNbr) {
    elt.innerHTML = i;
    setTimeout(function () {
      incNbrRec(i + 1, endNbr, elt);
    }, speed);
  } else {
    // Animation has ended, add the content "+" after the final number
    elt.classList.add("animated");
  }
}

window.onload = function () {
  incEltNbr("nbr-2");
};

window.addEventListener("scroll", function () {
  var lottiePlayer = document.getElementById("lottie-player");
  var scrollPosition = window.scrollY || window.pageYOffset;
  var threshold = window.innerHeight * 0.1; // 10vh

  if (scrollPosition > threshold) {
    lottiePlayer.style.display = "none";
  } else {
    lottiePlayer.style.display = "block";
  }
});
