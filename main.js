import './styles/style.css';
import { initNavigation } from './scripts/navigation.js';
import { initAnimations } from './scripts/animations.js';
import { loadServices } from './scripts/services/services.js';
import { loadBlogPosts } from './scripts/blog/blogPosts.js';

// Initialize all modules when DOM is ready
document.addEventListener('DOMContentLoaded', async () => {
    initNavigation();
    initAnimations();
    
    // Load services and blog posts for the homepage
    await Promise.all([
        loadServices(),
        loadBlogPosts()
    ]);
});