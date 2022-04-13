//header esc button

const $alertNav = document.querySelector(".alert_nav_wrap");
const $escBtn = document.querySelector(".esc");

$escBtn.addEventListener("click", () => {
  $alertNav.style.transform = "translateY(-50px)";
  setTimeout(() => {
    $alertNav.style.display = "none";
  }, 200);
});

// header button
const $headerBtns = document.querySelectorAll(".login_btn");

$headerBtns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const x = e.clientX;
    const y = e.clientY;
    // 클릭위치

    const buttonTop = e.target.offsetTop;
    const buttonLeft = e.target.offsetLeft;
    // 버튼위치

    const xInside = x - buttonLeft;
    const yInside = y - buttonTop;
    console.log(xInside, yInside);
    // 버튼 내부 클릭위치

    const $circle = document.createElement("span");
    $circle.classList.add("circle");
    $circle.style.top = yInside + "px";
    $circle.style.left = xInside + "px";

    e.target.appendChild($circle);
    console.log(e.target);
    // function함수에선 this가능
    // 이벤트 위임..?
  });
});

// nav
const $navLi = document.querySelectorAll(".nav_wrap ul li");
const $subNavBack = document.querySelector(".sub_nav_back");
const $subNav = document.querySelectorAll(".sub_nav");

$navLi.forEach((nav, index) => {
  nav.addEventListener("mouseover", () => {
    $subNavBack.style.display = "block";
    $subNav.style.display = "block !important";
  });

  nav.addEventListener("mouseleave", () => {
    $subNavBack.style.display = "none";
  });
});
