import { loadServices } from './services.js';
import { loadPricing } from './pricing.js';
import { loadCommonElements } from '../common/pageLoader.js';

document.addEventListener('DOMContentLoaded', async () => {
    // Load common elements
    await loadCommonElements();

    // Initialize services page
    await loadServices();
    await loadPricing();
});