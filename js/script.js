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
        showSection(defaultSectionId);
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
                const headerOffset = 1000; // Fixed header height in pixels
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

document.getElementById('showLogin')
.addEventListener('click',
    function(){

document.getElementById('login').style.display = 'grid';
});


document.addEventListener('click',
    function(event) {
        if
    (event.target.classList.contains('close-button')) {
        document.getElementById('login').style.display = 'none';
    }
    });

    document.addEventListener('DOMContentLoaded', function() {
        const toggleMenu = document.getElementById('toggleMenu');
        const sidebar = document.getElementById('sidebar');
    
        toggleMenu.addEventListener('click', function() {
            sidebar.classList.toggle('active'); // Toggle the 'active' class on the links
        });
    
        // Optional: Close the menu when clicking outside
        document.addEventListener('click', function(event) {
            if (!toggleMenu.contains(event.target) && !sidebar.contains(event.target)) {
                sidebar.classList.remove('active'); // Remove active class if clicking outside
            }
        });
    });

    
    document.addEventListener('DOMContentLoaded', function() {
        const foodList = document.getElementById('foodList');
        const productbarmenu = document.getElementById('productbarmenu');
    
        foodList.addEventListener('click', function() {
            productbarmenu.classList.toggle('active'); // Toggle the 'active' class on the links
        });
    
        // Optional: Close the menu when clicking outside
        document.addEventListener('click', function(event) {
            if (!foodList.contains(event.target) && !productbarmenu.contains(event.target)) {
                productbarmenu.classList.remove('active'); // Remove active class if clicking outside
            }
        });
    });