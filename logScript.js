const users = [
    { email: "user0@mail.ru", password: "password0" },
    { email: "user1@mail.ru", password: "password1" },
    { email: "user2@mail.ru", password: "password2" }
];

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();

    if (email === "" || password === "") {
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
