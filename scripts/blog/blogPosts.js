const POSTS_PER_PAGE = 9;

export async function loadBlogPosts() {
    try {
        const response = await fetch('/data/blog-posts.json');
        const posts = await response.json();
        return posts;
    } catch (error) {
        console.error('Error loading blog posts:', error);
        return [];
    }
}

export function renderBlogPosts(posts, page = 1) {
    const blogGrid = document.querySelector('.blog-grid');
    const start = (page - 1) * POSTS_PER_PAGE;
    const end = start + POSTS_PER_PAGE;
    const paginatedPosts = posts.slice(start, end);

    blogGrid.innerHTML = paginatedPosts.map(post => `
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