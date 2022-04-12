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

  document.addEventListener("mousemove", (e) => {
    const x = e.clientX;
    const y = e.clientY;

    $target.style.transform = `translate(${x - targetHalfWidth}px, ${y - targetHalfHeight}px)`;
    $horizontal.style.transform = `translateY(${y}px)`;
    $vertical.style.transform = `translateX(${x}px)`;
    $tag.style.transform = `translate(${x}px, ${y}px)`;
    $tag.innerHTML = `${x}px, ${y}px`;
  });
});
