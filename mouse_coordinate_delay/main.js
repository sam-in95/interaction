const $horizontal = document.querySelector(".horizontal");
const $vertical = document.querySelector(".vertical");
const $target = document.querySelector(".target");
const $tag = document.querySelector(".tag");

addEventListener("load", () => {
  // HTML이 전부 로드 되면
  const targetRect = $target.getBoundingClientRect();
  // 사각형 그림 위치값 알수 있음
  console.log(targetRect);

  const targetHalfWidth = targetRect.width / 2;
  const targetHalfHeight = targetRect.height / 2;

  let curX = 0;
  let curY = 0;
  let mouseX = 0;
  let mouseY = 0;

  document.addEventListener("mousemove", (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });

  function animate() {
    requestAnimationFrame(animate);
    curX += (mouseX - curX) * 0.15;
    curY += (mouseY - curY) * 0.15;

    $vertical.style.transform = `translateX(${curX}px)`;
    $horizontal.style.transform = `translateY(${curY}px)`;
    $target.style.transform = `translate(${curX - targetHalfWidth}px, ${curY - targetHalfHeight}px)`;
    $tag.style.transform = `translate(${curX}px, ${curY}px)`;
    $tag.innerHTML = `${Math.ceil(curX)}px, ${Math.ceil(curY)}px`;
  }

  animate();
});
