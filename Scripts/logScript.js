document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); 
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (email == "" || password == "") {
        alert("Пожалуйста, заполните все поля.");
        return; 
    }

    const userFound = users.find(user => user.email === email && user.password === password);

    if (userFound) {
        window.location.href = "posts.html"; 
    } else {
        alert("Пользователь не найден");
    }
});


