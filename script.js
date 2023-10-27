const header = document.getElementsByTagName('header')[0];
const links = document.querySelectorAll('.nav-link');
const logo = document.querySelector('.logo-img');
const displayTitle = document.querySelector('.logotitle');
const mobileMenu = document.querySelector('.mobile-nav');
const menu = document.querySelector('.dk-nav');
const gallery = document.querySelectorAll('.dot');
const slides = document.querySelectorAll('.row');
const mountain1 = document.querySelector('#mountain-1');
const mountain2 = document.querySelector('#mountain-2');
const schedule1 = document.querySelector('.schedule-1');
const schedule2 = document.querySelector('.schedule-2');

// show mountain overlay upon click
mountain2.addEventListener('click', () => {
  schedule1.style.display = 'none';
  schedule2.style.display = 'flex';
  mountain2.classList.add('active');
  mountain1.classList.remove('active');
});
mountain1.addEventListener('click', () => {
  schedule1.style.display = 'flex';
  schedule2.style.display = 'none';
  mountain1.classList.add('active');
  mountain2.classList.remove('active');
});

//  slide gallery
let slideId = 0;
const showSlides = () => {
  slides.forEach((slide) => {
    slide.style.display = 'none';
    gallery[slideId].classList.remove('active');
  });
  slideId++; //eslint-disable-line
  if (slideId >= slides.length) { slideId = 0; }
  slides[slideId].style.display = 'flex';
  gallery[slideId].classList.add('active');
  setTimeout(showSlides, 5000);
};

showSlides();

// navbar style change on scroll
const scrollHeader = () => {
  if (document.documentElement.scrollTop > 50 && !menu.classList.contains('mobile')) {
    header.classList.add('scroll-header');
    links.forEach((element) => {
      element.classList.add('changeColor');
    });
    logo.classList.add('addBorder');
    displayTitle.style.display = 'flex';
    mobileMenu.style.color = '#4d4949';
  } else {
    header.classList.remove('scroll-header');
    links.forEach((element) => {
      element.classList.remove('changeColor');
    });
    logo.classList.remove('addBorder');
    displayTitle.style.display = 'none';
    mobileMenu.style.color = '#fff';
  }
};
// mobile menu on click
mobileMenu.addEventListener('click', () => {
  menu.classList.toggle('mobile');
  if (menu.classList.value === 'dk-nav mobile') {
    mobileMenu.innerHTML = '&#10006;';
  } else {
    mobileMenu.innerHTML = '&#9776;';
  }
});
// close overlay on click event
links.forEach((link) => {
  link.addEventListener('click', () => {
    menu.classList.remove('mobile');
    mobileMenu.innerHTML = '&#9776;';
  });
});

window.onscroll = () => scrollHeader();