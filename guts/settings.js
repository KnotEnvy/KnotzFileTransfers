// Function to save settings
function saveSettings() {
    // Retrieve user input
    var saveLocation = document.getElementById('save-location').value;
    var enableNotifications = document.getElementById('notifications').checked;

    // Save settings (for demonstration, we'll log them to the console)
    console.log('Save Location:', saveLocation);
    console.log('Enable Notifications:', enableNotifications);

    // You can save these settings to a file, local storage, or any preferred storage method

    alert('Settings saved successfully!');
}

// Add an event listener to the settings form
document.getElementById('settings-form').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent default form submission
    saveSettings();
});
