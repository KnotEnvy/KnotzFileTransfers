if (typeof ipcRenderer === 'undefined') {
    const { ipcRenderer } = require('electron');
}

function registerUser(event) {
    event.preventDefault();

    const username = document.getElementById('register-username').value;
    const password = document.getElementById('register-password').value;

    ipcRenderer.invoke('registerUser', username, password).then((response) => {
        alert(response);
    });
}

document.getElementById('registration-form').addEventListener('submit', registerUser);

