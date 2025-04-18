const toggleMenu = document.querySelector('.toggle-menu');
const sidebar = document.querySelector('.nested-menu');

toggleMenu.addEventListener('click', () => {
  sidebar.classList.toggle('active');

  // Toggle image src
  if (sidebar.classList.contains('active')) {
    toggleMenu.src = 'image/close.png'; // X icon
  } else {
    toggleMenu.src = 'image/menu-bar.png'; // Hamburger menu icon
  }
});
