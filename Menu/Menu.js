const menu = document.querySelector('.menu');
const menuButton = document.querySelector('.menu-button');
// Toggle the "menu--open" class on your menu refence.
const toggleMenu = function (event) {
  menu.classList.toggle('menu--open')
};
// Using your menuButton reference, add a click handler that calls toggleMenu
menuButton.addEventListener('click', toggleMenu);