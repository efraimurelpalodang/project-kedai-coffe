// Toggle class active
const navbarNav = document.querySelector('.navbar-nav');

// ketika humberger menu diclick
// document.getElementById('menu-bar').onclick = () => {
//   navbarNav.classList.toggle('active');
// }

// click diluar sidebar untuk menghilangkan nav
// const menu = document.getElementById('menu-bar');
document.addEventListener('click', function(e) {
  if(!menuBar.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove('active');
    span1.classList.remove('style-sp');
    span2.classList.remove('style');
    span3.classList.remove('style-s');
  }
});

//! style humberger menu
const menuBar = document.querySelector('div.bar-menu');
const span1 = menuBar.querySelectorAll('span')[0];
const span2= menuBar.querySelectorAll('span')[1];
const span3 = menuBar.querySelectorAll('span')[2];
menuBar.addEventListener('click', function() {
  //* style span1
  span1.classList.toggle('style-sp');
  span2.classList.toggle('style');
  span3.classList.toggle('style-s');
  navbarNav.classList.toggle('active');
  
});