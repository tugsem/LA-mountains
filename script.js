const header= document.getElementsByTagName('header')[0];
const links = document.querySelectorAll('.nav-link');
const logo = document.querySelector('#logo-img');
const displayTitle = document.querySelector('.logotitle');

const scrollHeader = () => {
  if (document.documentElement.scrollTop > 50 ) {
    header.classList.add('scroll-header');
    links.forEach(element => {
      element.classList.add('changeColor');

    });
    logo.classList.add('addBorder');
    displayTitle.style.display = 'flex';
  } else {
    header.classList.remove('scroll-header');
    links.forEach(element => {
      element.classList.remove('changeColor');
    });
    logo.classList.remove('addBorder');
    displayTitle.style.display = 'none';
  }
}
window.onscroll = () => scrollHeader();