if (typeof ipcRenderer === 'undefined') {
    const { ipcRenderer } = require('electron');
}

// Fetching and displaying ongoing transfers
function getOngoingTransfers() {
    ipcRenderer.invoke('getOngoingTransfers').then((transfers) => {
        const tableBody = document.getElementById('transfers-table').getElementsByTagName('tbody')[0];
        
        // Clear existing rows
        tableBody.innerHTML = '';

        // Add a row for each transfer
        transfers.forEach(function (transfer) {
            var row = tableBody.insertRow();
            
            row.insertCell(0).innerText = transfer.filename;
            row.insertCell(1).innerText = transfer.size;
            row.insertCell(2).innerText = transfer.progress;
            row.insertCell(3).innerText = transfer.status;
            row.insertCell(4).innerHTML = '<button>Accept</button> <button>Cancel</button>'; // Actions
        });
    }).catch(error => {
        alert(error);
    });
}

// Function to trigger a file picker and initiate a new file transfer
function initiateTransfer() {
    const input = document.createElement('input');
    input.type = 'file';
    input.click();
    
    input.addEventListener('change', () => {
        const file = input.files[0];
        if (file) {
            const transfer = {
                fileName: file.name,
                size: file.size,
                progress: 0,
                status: 'Initiated'
            };
            
            ipcRenderer.invoke('insertTransfer', transfer).then((response) => {
                alert(response);
                getOngoingTransfers();
            });
        }
    });
}

document.addEventListener('DOMContentLoaded', (event) => {
    // Attach the initiateTransfer function to a button click event
    document.getElementById('initiate-transfer').addEventListener('click', initiateTransfer);
});

// Fetch ongoing transfers when the page loads
// getOngoingTransfers();
