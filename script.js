// CTA Button interaction
const ctaButton = document.querySelector('.cta-button');
if (ctaButton) {
    ctaButton.addEventListener('click', () => {
        // Add your CTA action here
        console.log('Find Out Now button clicked');
        // You can add navigation or form submission here
        // Example: window.location.href = '#signup';
        // Or show a modal, form, etc.
    });
}

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe illustration container
const illustrationContainer = document.querySelector('.illustration-container');
if (illustrationContainer) {
    illustrationContainer.style.opacity = '0';
    illustrationContainer.style.transform = 'translateY(10px)';
    illustrationContainer.style.transition = 'opacity 0.3s ease-out, transform 0.3s ease-out';
    observer.observe(illustrationContainer);
}

// Add smooth scroll behavior
document.documentElement.style.scrollBehavior = 'smooth';

// Image loading error handling
document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        img.addEventListener('error', function() {
            console.warn('Image failed to load:', this.src);
            // Optionally add a fallback or placeholder
            this.style.display = 'none';
        });
    });
});


