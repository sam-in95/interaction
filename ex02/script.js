const $btns = document.querySelectorAll('button');
const bgColor = ['bg_color--blue', 'bg_color--purple', 'img_show'];
const $bodyImg = document.querySelector('body img');

const deletColor = () => {
  for (let i = 0; i < bgColor.length; i++) {
    document.body.classList.remove(bgColor[i]);
    $bodyImg.classList.remove(bgColor[2]);
  }
};

$btns.forEach((btn, index) => {
  btn.addEventListener('click', (e) => {
    if (document.body.classList.contains(bgColor[index]) || $bodyImg.classList.contains(bgColor[2])) {
      if (index == 2) {
        $bodyImg.classList.remove(bgColor[2]);
      } else if (index < 2) {
        document.body.classList.remove(bgColor[index]);
      } else if (index == 3) {
        deletColor();
      }
    } else {
      deletColor();
      if (index == 2) {
        $bodyImg.classList.add(bgColor[2]);
      } else if (index < 2) {
        document.body.classList.add(bgColor[index]);
      } else if (index == 3) {
        deletColor();
      }
    }
  });
});
