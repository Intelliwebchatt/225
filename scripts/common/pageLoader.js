export async function loadCommonElements() {
    await Promise.all([
        loadNavigation(),
        loadFooter()
    ]);
}

async function loadNavigation() {
    const header = document.querySelector('header');
    try {
        const response = await fetch('/components/navigation.html');
        const html = await response.text();
        header.innerHTML = html;
        
        // Initialize navigation functionality
        const navModule = await import('../navigation.js');
        navModule.initNavigation();
    } catch (error) {
        console.error('Error loading navigation:', error);
    }
}

async function loadFooter() {
    const footer = document.querySelector('footer');
    try {
        const response = await fetch('/components/footer.html');
        const html = await response.text();
        footer.innerHTML = html;
    } catch (error) {
        console.error('Error loading footer:', error);
    }
}