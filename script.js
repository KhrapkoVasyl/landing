'use strict';

const hamburgerBtn = document.querySelector('.hamburger-btn');
const mobileNav = document.querySelector('.nav-mobile');

hamburgerBtn.addEventListener('click', () => {
  hamburgerBtn.classList.toggle('active');
  mobileNav.classList.toggle('active');
});
