// Get all images on the product and gallery pages
const images = document.querySelectorAll('.highlights-wrapper img, .products-preview img, .loc-description img');

// Add event listener to each image
images.forEach((image) => {
  image.addEventListener('click', () => {
    // Get the image source and create a new image element
    const src = image.src;
    const expandedImage = document.createElement('img');
    expandedImage.src = src;
    expandedImage.classList.add('expanded-image');

    // Create a container for the expanded image
    const container = document.createElement('div');
    container.classList.add('expanded-image-container');
    container.appendChild(expandedImage);

    // Add the container to the body
    document.body.appendChild(container);

    // Add event listener to close the expanded image
    container.addEventListener('click', () => {
      container.remove();
    });
  });
});

