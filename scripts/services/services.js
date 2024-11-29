export async function loadServices() {
    try {
        const response = await fetch('/data/services.json');
        const data = await response.json();
        renderServices(data.services);
    } catch (error) {
        console.error('Error loading services:', error);
    }
}

function renderServices(services) {
    const serviceCards = document.querySelector('.service-cards');
    if (!serviceCards) return;

    serviceCards.innerHTML = services.map(service => `
        <div class="service-card">
            <img src="${service.icon}" alt="${service.title} icon" class="service-icon">
            <h3>${service.title}</h3>
            <p>${service.description}</p>
            <ul class="service-features">
                ${service.features.map(feature => `
                    <li>${feature}</li>
                `).join('')}
            </ul>
            <a href="/contact" class="cta-button primary">Get Started</a>
        </div>
    `).join('');
}