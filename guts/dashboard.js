// Static transfer data (replace with real data source)
var transfers = [
    { fileName: 'file1.zip', size: '100MB', progress: '50%', status: 'In Progress' },
    { fileName: 'file2.pdf', size: '20MB', progress: '100%', status: 'Completed' },
    { fileName: 'file3.mp3', size: '5MB', progress: '0%', status: 'Pending' },
    // Add more transfers as needed
];

// Function to populate the dashboard
function populateDashboard() {
    var tableBody = document.getElementById('transfers-table').getElementsByTagName('tbody')[0];
    
    // Clear existing rows
    tableBody.innerHTML = '';

    // Add a row for each transfer
    transfers.forEach(function (transfer) {
        var row = tableBody.insertRow();
        
        row.insertCell(0).innerText = transfer.fileName;
        row.insertCell(1).innerText = transfer.size;
        row.insertCell(2).innerText = transfer.progress;
        row.insertCell(3).innerText = transfer.status;
        row.insertCell(4).innerHTML = '<button>Accept</button> <button>Cancel</button>'; // Actions
    });
}

// Call the function to populate the dashboard
populateDashboard();
