const toggleMenu = document.querySelector('.toggle-menu');
const sidebar = document.querySelector('.sidebar-menu');

toggleMenu.addEventListener('click', () => {
  sidebar.classList.toggle('active');

  // Toggle image src
  if (sidebar.classList.contains('active')) {
    toggleMenu.src = 'images/close.png'; // X icon
  } else {
    toggleMenu.src = 'images/menu-bar.png'; // Hamburger menu icon
  }
});
