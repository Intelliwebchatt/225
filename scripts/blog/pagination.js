const POSTS_PER_PAGE = 9;

export function initPagination(posts) {
    const totalPages = Math.ceil(posts.length / POSTS_PER_PAGE);
    let currentPage = 1;

    const prevButton = document.querySelector('.prev-page');
    const nextButton = document.querySelector('.next-page');
    const pageNumbers = document.querySelector('.page-numbers');

    function updatePagination() {
        // Update buttons state
        prevButton.disabled = currentPage === 1;
        nextButton.disabled = currentPage === totalPages;

        // Update page numbers
        pageNumbers.innerHTML = `Page ${currentPage} of ${totalPages}`;

        // Update displayed posts
        const start = (currentPage - 1) * POSTS_PER_PAGE;
        const end = start + POSTS_PER_PAGE;
        const paginatedPosts = posts.slice(start, end);
        
        renderPaginatedPosts(paginatedPosts);
    }

    prevButton?.addEventListener('click', () => {
        if (currentPage > 1) {
            currentPage--;
            updatePagination();
        }
    });

    nextButton?.addEventListener('click', () => {
        if (currentPage < totalPages) {
            currentPage++;
            updatePagination();
        }
    });

    // Initial render
    updatePagination();
}

function renderPaginatedPosts(posts) {
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