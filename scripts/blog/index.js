import { loadBlogPosts } from './blogPosts.js';
import { initFilters } from './filters.js';
import { initPagination } from './pagination.js';
import { loadCommonElements } from '../common/pageLoader.js';

document.addEventListener('DOMContentLoaded', async () => {
    // Load common elements (navigation, footer)
    await loadCommonElements();

    // Initialize blog functionality
    const posts = await loadBlogPosts();
    initFilters(posts);
    initPagination(posts);
});