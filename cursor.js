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