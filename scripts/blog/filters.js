export function initFilters(posts) {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const blogGrid = document.querySelector('.blog-grid');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            const category = button.dataset.category;
            
            // Update active button state
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            
            // Filter posts
            const filteredPosts = category === 'all' 
                ? posts 
                : posts.filter(post => post.category === category);
            
            renderFilteredPosts(filteredPosts);
        });
    });
}

function renderFilteredPosts(posts) {
    const blogGrid = document.querySelector('.blog-grid');
    
    blogGrid.innerHTML = posts.map(post => `
        <article class="blog-card">
            <img src="${post.image}" alt="${post.title}" loading="lazy">
            <div class="blog-content">
                <div class="blog-meta">
                    <span class="date">${post.date}</span>
                    <span class="category">${post.category}</span>
                </div>
                <h3>${post.title}</h3>
                <p>${post.excerpt}</p>
                <a href="/blog/${post.slug}" class="read-more">Read More</a>
            </div>
        </article>
    `).join('');
}