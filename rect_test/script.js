const $box = document.querySelector(".box");
const boxRect = $box.getBoundingClientRect();

const boxHalfWidth = boxRect.width / 2;
const boxHalfHeight = boxRect.height / 2;

console.log(boxRect);

let curX = 0;
let curY = 0;
let mouseX = 0;
let mouseY = 0;

document.addEventListener("mousemove", (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;

  $box.style.transform = `translate(${mouseX - boxHalfWidth}px, ${mouseY - boxHalfHeight}px)`;
  // console.log(mouseX, mouseY);
});

function animate() {
  requestAnimationFrame(animate);
  curX += (mouseX - curX) * 0.1;
  curY += (mouseY - curY) * 0.1;

  $box.style.transform = `translate(${curX - boxHalfWidth}px, ${curY - boxHalfHeight}px)`;
}

animate();
