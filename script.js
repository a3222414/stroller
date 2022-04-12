'use strict';

//Documents Elements
//TOP menu
const topMenuBox = document.querySelector('.top-menu-box');
//recomedation bar
const topBarBtn = document.querySelector('.top-reccommendation-btn');
const topBarBox = document.querySelector('.top-reccommendation-box');
//Header
const header = document.getElementsByTagName('header');
const headerButton = document.querySelector('.header-button');

//Buy box
const buyBox = document.querySelector('.buy-box');
//   TOP BAR!!!!!!

topBarBtn.addEventListener('click', function () {
  topBarBox.remove();
});

// Screen scrolling

const headerButtonDimension = headerButton.getBoundingClientRect();
const buyBoxDimension = buyBox.getBoundingClientRect();
console.log(buyBoxDimension);
console.log(pageXOffset, pageYOffset);

headerButton.addEventListener('click', function () {
  window.scrollTo({
    left: buyBoxDimension.left,
    top: buyBoxDimension.top,
    behavior: 'smooth',
  });
});

//Menu bar
topMenuBox.addEventListener('click', function (e) {
  e.preventDefault();

  console.log(e.target);
  console.log(e.target.getAttribute('href'));
  if (e.target.classList.contains('menu-link')) {
    const id = e.target.getAttribute('href');
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  }
});

//Testimonial change people
const testimonial = document.querySelector('.testimonial');
const testimonialIcon = document.querySelector('.testimonial-change-icon');
const testimonialContent = document.querySelectorAll('.testimonial-content');
let changeNum = 0;
const testimonialBackgroundColor = ['#ffdeeb', '#f1f3f5', '#ffe8cc', '#c3fae8'];
testimonialIcon.addEventListener('click', function (el) {
  el.preventDefault();
  testimonialContent.forEach((content) => {
    content.classList.add('testimonial-content-hidden');
  });

  changeNum++;
  if (changeNum === 4) {
    changeNum = 0;
  }
  document
    .querySelectorAll(`.testimonial-content--${changeNum}`)
    .forEach((content) => {
      content.classList.remove('testimonial-content-hidden');
    });
  testimonial.style.backgroundColor = testimonialBackgroundColor[changeNum];
});
