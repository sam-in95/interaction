const $alertNav = document.querySelector('.alert_nav_wrap');
const $escBtn = document.querySelector('.esc');

$escBtn.addEventListener('click', () => {
  $alertNav.style.transform = 'translateY(-50px)';
  setTimeout(() => {
    $alertNav.style.display = 'none';
  }, 200);
});
