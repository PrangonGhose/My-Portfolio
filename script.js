function showMobileMenu() {
  document.querySelector('.mobile-menu').classList.add('mobile-menu-active');
}

function backToNormal() {
  document.querySelector('.mobile-menu').classList.remove('mobile-menu-active');
}

const mobileMenu = document.querySelector('.union');
mobileMenu.addEventListener('click', showMobileMenu);
const closingCross = document.querySelector('.cross-button');
closingCross.addEventListener('click', backToNormal);
