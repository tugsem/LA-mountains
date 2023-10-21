const header= document.getElementsByTagName('header')[0];
const links = document.querySelectorAll('.nav-link');
const logo = document.querySelector('.logo-img');
const displayTitle = document.querySelector('.logotitle');
const mobileMenu = document.querySelector('.mobile-nav');
const menu = document.querySelector('.dk-nav');

const scrollHeader = () => {
  if (document.documentElement.scrollTop > 50 && !menu.classList.contains('mobile') ){
    header.classList.add('scroll-header');
    links.forEach(element => {
      element.classList.add('changeColor');

    });
    logo.classList.add('addBorder');
    displayTitle.style.display = 'flex';
    mobileMenu.style.color = '#4d4949';
  } else {
    header.classList.remove('scroll-header');
    links.forEach(element => {
      element.classList.remove('changeColor');
    });
    logo.classList.remove('addBorder');
    displayTitle.style.display = 'none';
    mobileMenu.style.color = '#fff';
  }
}

mobileMenu.addEventListener('click', () => {
  menu.classList.toggle('mobile');
  if (menu.classList.value === 'dk-nav mobile'){
    mobileMenu.innerHTML = '&#10006;'
  }else {
    mobileMenu.innerHTML = '&#9776;'
  }
})

links.forEach((link) => {
  link.addEventListener('click', () => {
    menu.classList.remove('mobile');
    mobileMenu.innerHTML = '&#9776;'
  })
})

window.onscroll = () => scrollHeader();