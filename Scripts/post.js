const postId = Number(new URLSearchParams(window.location.search).get('id')); 
const postContainer = document.getElementById('post-container');

setTimeout(() => {
    document.querySelector('#spinner').style.display = 'none';
    const post = posts.find(p => p.id === postId);
    postContainer.classList.remove('d-none');

    if (!post) {
        postContainer.innerHTML = `
            <div class="alert alert-danger" role="alert">
                404 – Статья не найдена.
            </div>
            <a href="posts.html" class="btn btn-primary">Назад к статьям</a>
        `;
    } else {
        let authorInfo = '';
        if (post.authorId) {
            const author = users.find(user => user.id === post.authorId);
            if (author) {
                authorInfo = `<p class="card-subtitle text-muted">Автор: ${author.name} | Дата публикации: ${post.date}</p>`;
            }
        }

        postContainer.innerHTML = `
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">${post.title}</h5>
                    <p class="card-text">${post.content}</p>
                    ${authorInfo}
                    <a href="posts.html" class="btn btn-primary">Назад к статьям</a>
                </div>
            </div>
        `;
    }
}, 2000); 
