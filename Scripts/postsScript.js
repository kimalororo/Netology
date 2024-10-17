setTimeout(() => {
    document.querySelector('#spinner').style.display = 'none';
    const postsContainer = document.querySelector('.posts-container');
    const realPosts = posts.slice(0, 4);
    const isAuthenticated = false;
    
    if (!isAuthenticated) {
        const authButtonContainer = document.getElementById('auth-button-container');
        authButtonContainer.innerHTML = `
            <a href="login.html" class="btn btn-primary">Авторизация</a>
        `;
    }
    realPosts.forEach(post => {
        const postElement = document.createElement('div');
        postElement.className = 'col-md-4 mb-4';

        postElement.innerHTML = `
            <div class="card h-100">
                <div class="card-body">
                    <h5 class="card-title">${post.title}</h5>
                    <p class="card-text">${post.content.substring(0, 40)}...</p>
                    <a href="post.html?id=${post.id}" class="btn btn-primary">Подробнее</a>
                </div>
            </div>
        `;

        postsContainer.appendChild(postElement);
    });

    const fakePosts = [
        { id: 999, title: "Несуществующая статья", content: "Этот пост не существует." },
        { id: 1000, title: "Несуществующая статья", content: "Этот пост не существует." }
    ];
    
    fakePosts.forEach(fakePost => {
        const postElement = document.createElement('div');
        postElement.className = 'col-md-4 mb-4';

        postElement.innerHTML = `
            <div class="card h-100">
                <div class="card-body">
                    <h5 class="card-title">${fakePost.title}</h5>
                    <p class="card-text">${fakePost.content.substring(0, 40)}...</p>
                    <a href="post.html?id=${fakePost.id}" class="btn btn-primary">Подробнее</a>
                </div>
            </div>
        `;

        postsContainer.appendChild(postElement);
    });

}, 2000);
