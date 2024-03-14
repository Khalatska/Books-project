window.addEventListener('DOMContentLoaded', () => {
  const supportContainer = document.querySelector('.support-container');

  function toggleSupportContainer() {
    if (window.innerWidth > 1440) {
      supportContainer.style.display = 'block';
    } else {
      supportContainer.style.display = 'none';
    }
  }

  toggleSupportContainer();

  window.addEventListener('resize', toggleSupportContainer);
});
