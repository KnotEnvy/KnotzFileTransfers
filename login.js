document.getElementById('login-form').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent default form submission

    // Retrieve user input
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // Validate credentials (replace with real authentication logic)
    if (username === 'admin' && password === 'password') {
        // Navigate to the dashboard
        document.getElementById('login').style.display = 'none';
        document.getElementById('dashboard').style.display = 'block';
    } else {
        alert('Invalid credentials! Please try again.');
    }
});
