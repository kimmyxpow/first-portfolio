//? For my logo on load
setTimeout(() => {
  document.querySelector('#load-wrapper').classList.add('out');
  document.body.classList.remove('overflow-y-hidden');
}, 4500);

// Change navbar style on scroll
window.addEventListener('scroll', function () {
  const nav = document.querySelector('nav');
  const navLogo = document.querySelector('.nav__logo');
  const windowPosition = window.scrollY > 0;
  nav.classList.toggle('nav--scroll', windowPosition);
  navLogo.classList.toggle('scroll', windowPosition);
  document.querySelector('.to-top').classList.toggle('show', windowPosition);
});

// Show navbar on mobile
document.querySelector('#menuToggle').addEventListener('click', () => {
  const menu = document.querySelector('.nav__links');
  menu.classList.toggle('show');
  document.body.classList.toggle('overflow-y-hidden');
  if (document.querySelector('nav').getAttribute('style') == null) {
    document.querySelector('nav').style.padding = '1.25rem 0';
  } else {
    document.querySelector('nav').removeAttribute('style');
  }
});

for (let i = 0; i < document.querySelectorAll('.nav__link').length; i++) {
  document.querySelectorAll('.nav__link')[i].addEventListener('click', () => {
    const menu = document.querySelector('.nav__links')
    if (menu.classList.contains('show')) {
      menu.classList.remove('show');
    }
  });
}

// Change active class of nav links on click
for (let i = 0; i < document.querySelectorAll('.nav__link').length; i++) {
  document.querySelectorAll('.nav__link')[i].addEventListener('click', (e) => {
    for (let i = 0; i < document.querySelectorAll('.nav__link').length; i++) {
      document.querySelectorAll('.nav__link')[i].classList.remove('active');
    }
    e.target.classList.add('active');
  });
}

document.querySelector('#myWork').addEventListener('click', () => {
  for (let i = 0; i < document.querySelectorAll('.nav__link').length; i++) {
    document.querySelectorAll('.nav__link')[i].classList.remove('active');
  }
  document.querySelectorAll('.nav__link')[2].classList.add('active');
});

// Project Slider
const projectSlide = document.querySelector('#project-slide');
const projectSliedeElement = document.querySelectorAll('#project-slide .project-sliede-element');

const prevProject = document.querySelector('#prevProject');
const nextProject = document.querySelector('#nextProject');

let counterProject = 1;
const sizeSlideProject = projectSlide.getBoundingClientRect().width;

projectSlide.style.transform = 'translateX(' + (-sizeSlideProject * counterProject) + 'px)';

nextProject.addEventListener('click', () => {
  if (counterProject >= projectSliedeElement.length -1) return;
  projectSlide.style.transition = "transform 0.6s ease-in-out";
  counterProject++;
  projectSlide.style.transform = 'translateX(' + (-sizeSlideProject * counterProject) + 'px)';
});

prevProject.addEventListener('click', () => {
  if (counterProject <= 0) return;
  projectSlide.style.transition = "transform 0.6s ease-in-out";
  counterProject--;
  projectSlide.style.transform = 'translateX(' + (-sizeSlideProject * counterProject) + 'px)';
});

projectSlide.addEventListener('transitionend', () => {
  if (projectSliedeElement[counterProject].id === 'lastClone') {
    projectSlide.style.transition = 'none';
    counterProject = projectSliedeElement.length - 2;
    projectSlide.style.transform = 'translateX(' + (-sizeSlideProject * counterProject) + 'px)';
  }
  if (projectSliedeElement[counterProject].id === 'firstClone') {
    projectSlide.style.transition = 'none';
    counterProject = projectSliedeElement.length - counterProject;
    projectSlide.style.transform = 'translateX(' + (-sizeSlideProject * counterProject) + 'px)';
  }
});

// Certificate Slider
const sliderCertificate = document.querySelector('#sliderCertificate');
const sliderCertificateElement = document.querySelectorAll('#sliderCertificate .sliderCertificateElement');

const prevCertificate = document.querySelector('#prevCertificate');
const nextCertificate = document.querySelector('#nextCertificate');

let counterCertificate = 1;
const sizeSlideCertificate = sliderCertificate.getBoundingClientRect().width;

sliderCertificate.style.transform = 'translateX(' + (-sizeSlideCertificate * counterCertificate) + 'px)';

nextCertificate.addEventListener('click', () => {
  if (counterCertificate >= sliderCertificateElement.length -1) return;
  sliderCertificate.style.transition = "transform 0.6s ease-in-out";
  counterCertificate++;
  sliderCertificate.style.transform = 'translateX(' + (-sizeSlideCertificate * counterCertificate) + 'px)';
});

prevCertificate.addEventListener('click', () => {
  if (counterCertificate <= 0) return;
  sliderCertificate.style.transition = "transform 0.6s ease-in-out";
  counterCertificate--;
  sliderCertificate.style.transform = 'translateX(' + (-sizeSlideCertificate * counterCertificate) + 'px)';
});

sliderCertificate.addEventListener('transitionend', () => {
  if (sliderCertificateElement[counterCertificate].id === 'lastCertificate') {
    sliderCertificate.style.transition = 'none';
    counterCertificate = sliderCertificateElement.length - 2;
    sliderCertificate.style.transform = 'translateX(' + (-sizeSlideCertificate * counterCertificate) + 'px)';
  }
  if (sliderCertificateElement[counterCertificate].id === 'firstCertificate') {
    sliderCertificate.style.transition = 'none';
    counterCertificate = sliderCertificateElement.length - counterCertificate;
    sliderCertificate.style.transform = 'translateX(' + (-sizeSlideCertificate * counterCertificate) + 'px)';
  }
});