document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        
        // Scroll to the target section smoothly
        document.querySelector(targetId).scrollIntoView({ behavior: 'smooth' });
    });
});

// No need to trigger click on any section by default anymore
