document.addEventListener('DOMContentLoaded', function() {
    // Select all links that point to sections
    const links = document.querySelectorAll('a[href^="#"]');

    // Function to show only the selected section and hide others
    function showSection(targetId) {
        const sections = document.querySelectorAll('.product-category'); // Select all product categories
        sections.forEach(section => {
            if (section.id === targetId.substring(1)) { // Check if it's the target section
                section.style.display = 'flex'; // Show the target section
            } else {
                section.style.display = 'none'; // Hide the other sections
            }
        });
    }

    // Check if we're on the food page
    const isFoodPage = window.location.pathname.includes('food.html');
    const defaultSectionId = '#Ricebowl';
    
    if (isFoodPage) {
        // Show Ricebowl by default when the food section is opened
        const savedSectionId = localStorage.getItem('activeSection') || defaultSectionId;
        showSection(savedSectionId);
    } else {
        // Clear the active section from localStorage when leaving the food page
        localStorage.removeItem('activeSection');
    }

    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault(); // Prevent default anchor click behavior

            const targetId = this.getAttribute('href'); // Get the target section ID
            const targetElement = document.querySelector(targetId); // Select the target element

            if (targetElement) {
                // Calculate the position to scroll to
                const headerOffset = 200; // Fixed header height in pixels
                const elementPosition = targetElement.getBoundingClientRect().top; // Get the target element position
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset; // Calculate the final position with margin

                // Scroll to the target element
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth' // Smooth scroll animation
                });

                // Show the selected section and hide others
                showSection(targetId);

                // Save the active section ID in localStorage only if we're on the food page
                if (isFoodPage) {
                    localStorage.setItem('activeSection', targetId);
                }
            }
        });
    });
});