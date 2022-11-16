function showMobileMenu() {
  document.querySelector('.mobile-menu').classList.add('mobile-menu-active');
  document.querySelector('body').style.overflow = 'hidden';
}

function backToNormal() {
  document.querySelector('.mobile-menu').classList.remove('mobile-menu-active');
  document.querySelector('body').style.overflow = 'visible';
}

const mobileMenu = document.querySelector('.union');
const closingCross = document.querySelector('.cross-button');
const mobileMenuListItems = document.querySelectorAll('.mobile-menu-listItems');

mobileMenu.addEventListener('click', showMobileMenu);

closingCross.addEventListener('click', backToNormal);

mobileMenuListItems.forEach((item) => {
  item.addEventListener('click', backToNormal);
});