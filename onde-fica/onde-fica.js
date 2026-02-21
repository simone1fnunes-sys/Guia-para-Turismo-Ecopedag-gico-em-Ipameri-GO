const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 10);
});
const searchToggle = document.getElementById('searchToggle');
const searchBar    = document.getElementById('searchBar');
const searchClose  = document.getElementById('searchClose');
const searchInput  = document.getElementById('searchInput');
searchToggle.addEventListener('click', () => {
  searchBar.classList.add('open');
  searchInput.focus();
});
searchClose.addEventListener('click', () => {
  searchBar.classList.remove('open');
  searchInput.value = '';
});
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') searchBar.classList.remove('open');
});
const hamburger = document.getElementById('hamburger');
const navMenu   = document.getElementById('navLinks');
hamburger.addEventListener('click', () => navMenu.classList.toggle('open'));