const bike = document.querySelector('.banner_bike');

window.addEventListener('load', () => {
  bike.style.transition = '2s';
  bike.style.transform = 'translate(500px, -35px)';
});

const benefitCard = document.querySelectorAll('.benefit_card');
const joinCard = document.querySelectorAll('.join_card');

window.addEventListener('scroll', () => {
  let scrollTop = window.scrollY;
  console.log(scrollTop);
  if (scrollTop > 1600) {
    benefitCard[0].style.transform = 'translateY(0)';
    benefitCard[0].style.opacity = '1';

    setTimeout(() => {
      benefitCard[1].style.transform = 'translateY(0)';
      benefitCard[1].style.opacity = '1';
    }, 100);

    setTimeout(() => {
      benefitCard[2].style.transform = 'translateY(0)';
      benefitCard[2].style.opacity = '1';
    }, 200);
  }

  if (scrollTop > 2420) {
    joinCard[0].style.transform = 'translateY(0)';
    joinCard[0].style.opacity = '1';

    setTimeout(() => {
      joinCard[1].style.transform = 'translateY(0)';
      joinCard[1].style.opacity = '1';
    }, 100);

    setTimeout(() => {
      joinCard[2].style.transform = 'translateY(0)';
      joinCard[2].style.opacity = '1';
    }, 200);
  }
});
