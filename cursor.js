document.addEventListener('mousemove', (e) => {
  const neonCursor = document.getElementById('neon-cursor');
  neonCursor.style.left = e.clientX + 'px';
  neonCursor.style.top = e.clientY + 'px';
  neonCursor.style.opacity = 1; 
});

document.addEventListener('mouseout', () => {
  const neonCursor = document.getElementById('neon-cursor');
  neonCursor.style.opacity = 0; 
});

document.addEventListener('DOMContentLoaded', () => {
  const neonCursor = document.getElementById('neon-cursor');
  const boxImages = document.querySelectorAll('.box-img');

  boxImages.forEach(boxImg => {
    boxImg.addEventListener('mouseenter', () => {
      if (neonCursor) {
        neonCursor.style.backgroundColor = 'transparent'; // Reduce intensity
      }
    });

    boxImg.addEventListener('mouseleave', () => {
      if (neonCursor) {
        neonCursor.style.backgroundColor = 'magenta'; // Restore original intensity
      }
    });
  });
});