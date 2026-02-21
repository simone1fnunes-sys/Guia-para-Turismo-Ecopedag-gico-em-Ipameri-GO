const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 10);
});
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') searchBar.classList.remove('open');
});
const hamburger = document.getElementById('hamburger');
const navMenu   = document.getElementById('navLinks');
hamburger.addEventListener('click', () => navMenu.classList.toggle('open'));