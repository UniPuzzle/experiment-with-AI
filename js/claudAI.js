const diamonds = document.querySelectorAll(".diamond");

diamonds.forEach((diamond) => {
  diamond.addEventListener("mousedown", dragStart);
  diamond.addEventListener("mouseup", dragEnd);
  diamond.addEventListener("mousemove", drag);
});

let currentDiamond = null;
let initialX, initialY, currentX, currentY;

function dragStart(e) {
  if (e.target.classList.contains("diamond")) {
    currentDiamond = e.target;
    initialX = e.clientX - currentDiamond.offsetLeft;
    initialY = e.clientY - currentDiamond.offsetTop;
  }
}

function dragEnd(e) {
  currentDiamond = null;
}

function drag(e) {
  if (currentDiamond) {
    e.preventDefault();
    currentX = e.clientX - initialX;
    currentY = e.clientY - initialY;
    currentDiamond.style.left = currentX + "px";
    currentDiamond.style.top = currentY + "px";
  }
}
