const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let iterations = 0;
let initialFontSize = document.querySelector("h1").style.fontSize;

document.querySelector("h1").onmouseover = event => {
  initialFontSize = event.target.style.fontSize;
  const interval = setInterval(() => {
    event.target.innerText = event.target.innerText.split("")
    .map((letter, index) => {
      if(index < iterations){
          return event.target.dataset.value[index];
      }
      return letters[Math.floor(Math.random() * 26)]
    })
    .join("");
    
    iterations += 1 / 3;
    if (iterations >= event.target.dataset.value.length) {
      clearInterval(interval);
      iterations = 0;
      setTimeout(() => {
        event.target.style.fontSize = initialFontSize;
        event.target.innerText = event.target.dataset.value;
      }, 1000);
    }
  }, 30);
}

document.querySelector("h1").onmouseout = event => {
  event.target.style.fontSize = initialFontSize;
  event.target.innerText = event.target.dataset.value;
  clearInterval(interval);
  iterations = 0;
}
