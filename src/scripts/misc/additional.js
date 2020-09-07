const backToTop = document.querySelector('#back-to-top');
window.addEventListener('scroll', () => {
  if (document.documentElement.scrollTop > 500) {
    backToTop.style.display = 'block';
  } else {
    backToTop.style.display = 'none';
  }
});

backToTop.addEventListener('click', (e) => {
  e.preventDefault();
  document.documentElement.scrollTop = 0;
});
