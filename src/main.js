import './js/header';
import './js/API';
import './js/categories';
import './js/best-sellers';
import './js/modal-window';
import './js/support-ukraine';
import './js/dark.-theme';

document.addEventListener('DOMContentLoaded', () => {
  const scrollUpButton = document.querySelector('.scroll-up');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 600) {
      scrollUpButton.classList.add('show');
    } else {
      scrollUpButton.classList.remove('show');
    }
  });

  scrollUpButton.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  });
});
