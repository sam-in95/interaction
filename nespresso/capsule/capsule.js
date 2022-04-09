// tap_btn

const $tapBtns = document.querySelectorAll('.tap_btn');

$tapBtns.forEach((btn, index) => {
  btn.addEventListener('click', () => {
    $tapBtns[0].classList.remove('on');
    $tapBtns[1].classList.remove('on');

    btn.classList.add('on');
  });
});
