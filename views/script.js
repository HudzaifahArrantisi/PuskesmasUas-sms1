document.getElementById('loginForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const passwordError = document.getElementById('passwordError');

    // Data admin
    const admins = [
        { username: 'ujai', password: 'ujai12' },
        { username: 'wahyu', password: '12345' },
        { username: 'admin3', password: 'password3' },
        { username: 'admin4', password: 'password4' }
    ];

    const isValidAdmin = admins.some(admin => 
        admin.username === username && admin.password === password
    );

    if (isValidAdmin) {
        
        window.location.href = '../dashboard/dashboard.html';
    } else {
        passwordError.classList.remove('hidden');
    }
});