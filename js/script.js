document.addEventListener("DOMContentLoaded", function() {
    // Get all product category links
    const productLinks = document.querySelectorAll('.products-a');
    
    // Get all product categories
    const productCategories = document.querySelectorAll('.products-category');

    // Function to show the selected category and hide others
    function showCategory(selectedCategory) {
        productCategories.forEach(category => {
            if (category.id === selectedCategory) {
                category.style.display = 'flex'; // Show the selected category
            } else {
                category.style.display = 'none'; // Hide other categories
            }
        });
    }

    // Add click event listeners to each product link
    productLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault(); // Prevent default anchor behavior
            const selectedCategory = this.getAttribute('href').substring(1); // Get the category id from href
            showCategory(selectedCategory); // Show the selected category
        });
    });

    // Check URL for section parameter and show the corresponding category
    const urlParams = new URLSearchParams(window.location.search);
    const section = urlParams.get('section');
    if (section) {
        showCategory(section); // Show the section based on URL parameter
    } else {
        // Initially show the rice bowls section if no section is specified
        showCategory('ricebowls');
    }
});