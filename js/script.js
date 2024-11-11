
document.addEventListener("DOMContentLoaded", function() {

  // Add click event listener to the link that targets #Ricebowl
  const ricebowlLink = document.querySelector('a[href="#Ricebowl"]');

  if (ricebowlLink) {
      ricebowlLink.addEventListener('click', function(event) {
          event.preventDefault(); // Prevent the default anchor click behavior
          
          // Get the position of the #Ricebowl section
          const foodSection = document.getElementById('Food');
          const sectionPosition = foodSection.getBoundingClientRect().top + window.scrollY;

          // Scroll to the section position minus the header height
          window.scrollTo({
              top: sectionPosition - headerHeight,
              behavior: 'smooth' // Smooth scroll
          });
      });
  }
});



document.addEventListener("DOMContentLoaded", function() {

  // Add click event listener to the link that targets #Ricebowl
  const milkteaLink = document.querySelector('a[href="#Milktea"]');

  if (milkteaLink) {
      milkteaLink.addEventListener('click', function(event) {
          event.preventDefault(); // Prevent the default anchor click behavior
          
          const foodSection = document.getElementById('Food');
          const sectionPosition = foodSection.getBoundingClientRect().top + window.scrollY;

          // Scroll to the section position minus the header height
          window.scrollTo({
              top: sectionPosition - headerHeight,
              behavior: 'smooth' // Smooth scroll
          });
      });
  }
});



document.addEventListener("DOMContentLoaded", function() {

  // Add click event listener to the link that targets #Ricebowl
  const burgerLink = document.querySelector('a[href="#Burger"]');

  if (burgerLink) {
      burgerLink.addEventListener('click', function(event) {
          event.preventDefault(); // Prevent the default anchor click behavior
          
          const foodSection = document.getElementById('Food');
          const sectionPosition = foodSection.getBoundingClientRect().top + window.scrollY;

          // Scroll to the section position minus the header height
          window.scrollTo({
              top: sectionPosition - headerHeight,
              behavior: 'smooth' // Smooth scroll
          });
      });
  }
});


document.addEventListener("DOMContentLoaded", function() {

  // Add click event listener to the link that targets #Ricebowl
  const nachosLink = document.querySelector('a[href="#Nachos"]');

  if (nachosLink) {
      nachosLink.addEventListener('click', function(event) {
          event.preventDefault(); // Prevent the default anchor click behavior
          
          const foodSection = document.getElementById('Food');
          const sectionPosition = foodSection.getBoundingClientRect().top + window.scrollY;

          // Scroll to the section position minus the header height
          window.scrollTo({
              top: sectionPosition - headerHeight,
              behavior: 'smooth' // Smooth scroll
          });
      });
  }
});

