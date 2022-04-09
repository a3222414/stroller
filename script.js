'use strict';

//Documents Elements
const header = document.getElementsByTagName('header');
const topBarBtn = document.querySelector('.top-bar-btn');
const topBarBox = document.querySelector('.top-bar-box');
console.log(header);

//   TOP BAR!!!!!!
// const topbar = document.createElement('div');
// topbar.classList.add('top-bar-box');

// topbar.innerHTML =
//   '大特價至4月15日！最低一折，請把握機會～<button class="top-bar-btn">確認</button>';

// console.log(topbar);

// header.before(topbar);
topBarBtn.addEventListener('click', function () {
  topBarBox.remove();
});
