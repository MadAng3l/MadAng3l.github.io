const trailer = document.getElementById("trailer");
const delay = 30; // adjust this value to control the amount of lag

let mouseX = 0;
let mouseY = 0;
let trailerX = 0;
let trailerY = 0;

document.addEventListener("mousemove", (event) => {
  mouseX = event.pageX;
  mouseY = event.pageY;
});

function animateTrailer() {
  let cursorDiff = mouseX - trailerX;
  if(cursorDiff > 25) {
    trailerX += (mouseX - trailerX - 50) / delay;
    trailerY += (mouseY - trailerY - 25) / delay;
  }
  else {
    trailerX += (mouseX - trailerX) / delay;
    trailerY += (mouseY - trailerY - 25) / delay;
  }
  let flip = cursorDiff < 25 ? -1 : 1;
  trailer.style.transform = `translate(${trailerX}px, ${trailerY}px) scaleX(${flip})`;

  requestAnimationFrame(animateTrailer);
}

animateTrailer();
