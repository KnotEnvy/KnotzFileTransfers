// Function to display transfer details
function displayTransferDetails(index) {
    // Get the selected transfer from the static array
    var selectedTransfer = transfers[index];

    // Update the Transfer Details section with the selected transfer details
    document.getElementById('file-name').innerText = selectedTransfer.fileName;
    document.getElementById('file-size').innerText = selectedTransfer.size;
    document.getElementById('file-progress').innerText = selectedTransfer.progress;
    document.getElementById('file-status').innerText = selectedTransfer.status;

    // Show the Transfer Details section
    document.getElementById('transfer-details').style.display = 'block';
}

// Example: Add a click event listener to the first row of the transfers table
document.getElementById('transfers-table').getElementsByTagName('tbody')[0].rows[0].addEventListener('click', function() {
    displayTransferDetails(0); // Display details for the first transfer
});
