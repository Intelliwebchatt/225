export async function loadPricing() {
    try {
        const response = await fetch('/data/pricing.json');
        const data = await response.json();
        renderPricing(data.pricing);
    } catch (error) {
        console.error('Error loading pricing:', error);
    }
}

function renderPricing(pricing) {
    const pricingGrid = document.querySelector('.pricing-grid');
    if (!pricingGrid) return;

    pricingGrid.innerHTML = pricing.map(plan => `
        <div class="pricing-card ${plan.recommended ? 'recommended' : ''}">
            ${plan.recommended ? '<span class="recommended-badge">Recommended</span>' : ''}
            <h3>${plan.name}</h3>
            <div class="price">
                <span class="currency">$</span>
                <span class="amount">${plan.price}</span>
                <span class="period">/month</span>
            </div>
            <ul class="features">
                ${plan.features.map(feature => `
                    <li>${feature}</li>
                `).join('')}
            </ul>
            <a href="/contact" class="cta-button ${plan.recommended ? 'primary' : 'secondary'}">
                Get Started
            </a>
        </div>
    `).join('');
}