document.addEventListener('DOMContentLoaded', function () {
    const lookupButton = document.getElementById('lookup');
    const lookupCitiesButton = document.getElementById('lookup-cities');
    const countryInput = document.getElementById('country');
    const resultDiv = document.getElementById('result');

    // Function to perform AJAX requests
    function fetchData(query) {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', query, true);
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    resultDiv.innerHTML = xhr.responseText;
                } else {
                    resultDiv.innerHTML = 'An error occurred while fetching the data.';
                }
            }
        };
        xhr.send();
    }

    // Event listener for the "Lookup" button
    lookupButton.addEventListener('click', function () {
        const country = countryInput.value.trim();
        const url = `world.php?country=${encodeURIComponent(country)}`;
        fetchData(url);
    });

    // Event listener for the "Lookup Cities" button
    lookupCitiesButton.addEventListener('click', function () {
        const country = countryInput.value.trim();
        const url = `world.php?country=${encodeURIComponent(country)}&lookup=cities`;
        fetchData(url);
    });
});


