const bike = document.querySelector('.banner_bike');

window.addEventListener('load', () => {
  bike.style.transition = 'ease-in-out 2s';
  bike.style.transform = 'translate(500px, -35px)';
});

const iconLine = document.querySelector('.icon_line');
const benefitCard = document.querySelectorAll('.benefit_card');
const joinCard = document.querySelectorAll('.join_card');

window.addEventListener('scroll', () => {
  let scrollTop = window.scrollY;

  if (scrollTop > 450) {
    iconLine.style.transform = 'translateX(110px)';
  }

  if (scrollTop > 1600) {
    benefitCard.forEach((card, index) => {
      setTimeout(() => {
        benefitCard[index].style.transform = 'translateY(0)';
        benefitCard[index].style.opacity = '1';
      }, index * 100);
    });
  }

  if (scrollTop > 2420) {
    joinCard.forEach((card, index) => {
      setTimeout(() => {
        joinCard[index].style.transform = 'translateY(0)';
        joinCard[index].style.opacity = '1';
      }, index * 100);
    });
  }
});
