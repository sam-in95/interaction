// background animation

const $bannerDots = document.querySelectorAll('.banner_back');
const $firstAni = document.querySelectorAll('.first');
const $secondAni = document.querySelectorAll('.second');

// backDotAni();

// const backDotAni = () => {};

setInterval(() => {
  $firstAni.forEach((dot, index) => {
    dot.classList.remove('ani');
    void dot.offsetWidth;
    dot.classList.add('ani');
  });
}, 50000);

setInterval(() => {
  $secondAni.forEach((dot, index) => {
    dot.classList.remove('ani');
    void dot.offsetWidth;
    dot.classList.add('ani');
  });
}, 20000);

// head text

const $headTitle = document.querySelectorAll('h2');

// $headTitle.forEach((title) => {
//   title.innerHTML = title.innerText
//     .split('')
//     .map((title, index) => `<span style="transition-delay:${index * 50}ms">${title}</span>`)
//     .join('');
// });

// const $headTitleSpan = document.querySelectorAll('.ability_title span');
// $headTitleSpan.forEach((span) => {
//   span.addEventListener('click', () => {
//     span.style.transform = `translateY(0)`;
//     // alert();
//   });
// });

// video on
const $videoTextCon = document.querySelectorAll('.video_text_con');
const $video = document.querySelectorAll('video');

$videoTextCon.forEach((text, index) => {
  text.addEventListener('click', (e) => {
    $videoTextCon.forEach((text) => {
      text.classList.remove('video_on');
    });
    e.target.classList.add('video_on');
    if (text.classList.contains('video_on')) {
      $video.forEach((video) => {
        video.style.display = 'none';
      });
      $video[index].style.display = 'block';
    }
  });
});

// nav scroll
const $scrollBtn = document.querySelectorAll('.nav_btn');
const $contents = document.querySelectorAll('section');
let slideCurrent = 0;

$scrollBtn.forEach((btn, index) => {
  btn.addEventListener('click', () => {
    $contents[index].scrollIntoView({ behavior: 'smooth', block: 'center' });
  });
});

// card slide
const $storyBoxSlide = document.querySelector('.story_box_slide');
const $storyBoxes = document.querySelectorAll('.story_box');
const slideLen = $storyBoxes.length;
const slideSpeed = 3000;
const slideWidth = 3864;

console.log(slideLen);

// let firstChild = $storyBoxSlide.firstElementChild;
// let clonedFirst = firstChild.cloneNode(true);

// $storyBoxSlide.appendChild(clonedFirst);

setInterval(() => {
  slideCurrent++;
  let slideWidth = $storyBoxSlide.style.transform;
  $storyBoxSlide.style.transition = `${slideSpeed}ms`;
  $storyBoxSlide.style.transform = `translateX(${slideCurrent * -50}px)`;
  if (slideCurrent === 72) {
    setTimeout(() => {
      $storyBoxSlide.style.transition = '0ms';
      $storyBoxSlide.style.transform = `translateX(-280px)`;
      slideCurrent = 0;
    });
  }

  console.log(slideCurrent);
}, 1000);
