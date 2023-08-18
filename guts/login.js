document.getElementById('login-form').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent default form submission

    // Retrieve user input
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // Hardcoded credentials
    var adminUsername = 'admin';
    var adminPassword = 'password';

    // Validate credentials
    if (username === adminUsername && password === adminPassword) {
        // Hide login section
        document.getElementById('login').style.display = 'none';

        // Show dashboard
        document.getElementById('dashboard').classList.remove('hidden');

        // Navigate to the dashboard (optional)
        window.location.hash = 'dashboard';
    } else {
        // Display error message (you can customize this as needed)
        var errorMessage = "Invalid username or password";
        if (!username) errorMessage = "Username is required";
        if (!password) errorMessage = "Password is required";

        // Display the error message
        alert(errorMessage);
    }
});

var isLoggedIn = false
if (username === adminUsername && password === adminPassword) {
    isLoggedIn = true; // Update login status
    document.querySelector('nav').addEventListener('click', function (event) {
        event.preventDefault(); // Prevent default navigation behavior

        // Get the target section ID from the href attribute
        var targetSectionId = event.target.getAttribute('href').substring(1);

        // Hide all sections
        document.querySelectorAll('main > section').forEach(function (section) {
            section.classList.add('hidden');
        });

        // Show the target section
        document.getElementById(targetSectionId).classList.remove('hidden');
    });
}


