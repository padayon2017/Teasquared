const menuBtn = document.querySelector('.menu-btn');
  const sidebarContainer = document.querySelector('.sidebar-container');

  menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle('close');

    if (menuBtn.classList.contains('close')) {
      sidebarContainer.classList.add('show');
      menuBtn.src = 'images/icons/close-button.png';
    } else {
      sidebarContainer.classList.remove('show');
      menuBtn.src = 'images/icons/icons8-menu-50.png';
    }
  });