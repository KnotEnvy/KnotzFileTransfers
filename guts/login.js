const { ipcRenderer } = require('electron');

// Flag to track login status
var isLoggedIn = false;

document.getElementById('login-form').addEventListener('submit', async function (event) {
    event.preventDefault(); // Prevent default form submission

    // Retrieve user input
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    try {
        const result = await ipcRenderer.invoke('loginUser', username, password);
        alert(result);  // Show alert if login is successful.
        // Successfully logged in
        localStorage.setItem('isLoggedIn', 'true');
        document.getElementById('login').style.display = 'none';
        document.getElementById('dashboard').classList.remove('hidden');
        document.getElementById('nav-links').classList.remove('hidden');  // <-- Add this line
        window.location.hash = 'dashboard';
    } catch (error) {
        alert(error);  // Show error alert.
    }
});

// Navigation event listener (outside the login event listener)
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
