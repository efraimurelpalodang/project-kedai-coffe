// Toggle class active
const navbarNav = document.querySelector('.navbar-nav');

document.addEventListener('click', function(e) {
  if(!menuBar.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove('active');
    span1.classList.remove('style-sp');
    span2.classList.remove('style');
    span3.classList.remove('style-s');
  }

  if(!search.contains(e.target) && !formSearch.contains(e.target)) {
    formSearch.classList.remove('active');
  }

  if(!shop.contains(e.target) && !shopCard.contains(e.target)) {
    shopCard.classList.remove('active');
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

//! style form search 
const search = document.getElementById('search');
const formSearch = document.getElementsByClassName('search-form')[0];
const searchBox = document.getElementById('search-box');
search.addEventListener('click', e => {
  formSearch.classList.toggle('active');
  searchBox.focus();
  e.preventDefault(); // untuk memperbaiki bug agar saat diclick dimana aja tidak balik ke atas
})

//! style shoping card
const shop = document.getElementById('shoping-card-button');
const shopCard = document.querySelector('.shoping-card');
shop.addEventListener('click', e => {
  shopCard.classList.toggle('active');
  e.preventDefault();
});

//! style menampilkan detail produk
const eyes = document.querySelector('#produk .bx-show');
const closeIDM = document.querySelector('#produk .bx-show');
const detail = document.getElementById('item-detail-modal');
const conIDM = document.querySelector('#item-detail-modal .modal-container');
eyes.addEventListener('click', e => {
  detail.classList.toggle('active');
  conIDM.style.transform = 'scale(1)';
  e.preventDefault();
});

//! saat tombol close detail di click
// closeIDM.addEventListener('click', e => {
//   detail.classList.toggle('active');
//   conIDM.style.transform = 'scale(0)';
//   e.preventDefault();
// });