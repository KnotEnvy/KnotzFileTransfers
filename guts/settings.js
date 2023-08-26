if (typeof ipcRenderer === 'undefined') {
    const { ipcRenderer } = require('electron');
}


function saveSettings(event) {
    event.preventDefault();

    const saveLocation = document.getElementById('save-location').value;
    const enableNotifications = document.getElementById('notifications').checked ? 1 : 0;
    
    ipcRenderer.invoke('saveSettings', saveLocation, enableNotifications).then((response) => {
        alert(response);
    });
}

document.getElementById('settings-form').addEventListener('submit', saveSettings);
