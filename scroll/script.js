const $btns = document.querySelectorAll(".btn");
const $contents = document.querySelectorAll(".contents");

$btns.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    $contents[index].scrollIntoView({ behavior: "smooth", block: "center" });
  });
});

const $topBtn = document.querySelector(".top");

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    $topBtn.classList.add("top_show");
  } else {
    $topBtn.classList.remove("top_show");
  }
});

$topBtn.addEventListener("click", () => {
  window.scrollTo({ top: "0", behavior: "smooth" });
});
