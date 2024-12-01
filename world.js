// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function () {
    // Get references to the button, input field, and result div
    const lookupButton = document.getElementById('lookup');
    const countryInput = document.getElementById('country');
    const resultDiv = document.getElementById('result');

    // Add event listener to the Lookup button
    lookupButton.addEventListener('click', function () {
        // Get the value from the input field and trim whitespace
        const country = countryInput.value.trim();

        // Build the URL with the query parameter for the country (empty is fine)
        const url = `world.php?country=${encodeURIComponent(country)}`;

        // Create a new XMLHttpRequest object
        const xhr = new XMLHttpRequest();

        // Configure the GET request
        xhr.open('GET', url, true);

        // Set up a function to handle the response
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) { // Request completed
                if (xhr.status === 200) { // HTTP OK
                    // Print the data into the result div
                    resultDiv.innerHTML = xhr.responseText;
                } else {
                    // Handle errors by displaying a message
                    resultDiv.innerHTML = 'An error occurred while fetching the data.';
                }
            }
        };

        // Send the request
        xhr.send();
    });
});

