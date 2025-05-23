const lightbox = document.getElementById('lightbox');
const lightboxImg = lightbox.querySelector('img');
const images = document.querySelectorAll('.me, .pet, .about-pic, .image');

images.forEach(img => {
  img.addEventListener('click', () => {
    lightboxImg.src = img.src;
    lightbox.classList.add('active');
  });
});

lightbox.addEventListener('click', () => {
  lightbox.classList.remove('active');
});
