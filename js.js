// Target the container wrappers instead of the buttons directly
const revealContainers = document.querySelectorAll('.reveal-container');

const observerOptions = {
    root: null,         
    threshold: 0.1,    // Triggers when 10% of the container is visible
    rootMargin: "0px"   
};

const scrollObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Add active to the container wrapper
            entry.target.classList.add('active');
        } else {
            // Remove active when it leaves the screen
            entry.target.classList.remove('active');
        }
    });
}, observerOptions);

// Observe the containers
revealContainers.forEach(container => {
    scrollObserver.observe(container);
});
