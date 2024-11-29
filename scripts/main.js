import { initNavigation } from './navigation.js';
import { initAnimations } from './animations.js';
import { initForms } from './forms.js';

// Initialize all modules when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    initNavigation();
    initAnimations();
    initForms();
    
    // Initialize lazy loading
    const lazyImages = document.querySelectorAll('img.lazy');
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                observer.unobserve(img);
            }
        });
    });

    lazyImages.forEach(img => imageObserver.observe(img));
});

// Error handling
window.addEventListener('error', (e) => {
    console.error('Error occurred:', e.message);
    // You might want to send this to an error tracking service
});