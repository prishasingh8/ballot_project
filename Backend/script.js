const apiKey = 'AIzaSyAJkTs0t-NeKUJlCRPDyMpLoTmflXIclE8';

function initialize() {
    const searchInput = document.getElementById('search_input');
    const autocomplete = new google.maps.places.Autocomplete(searchInput, { types: ['geocode'] });

    autocomplete.addListener('place_changed', function() {
        const place = autocomplete.getPlace();
        console.log('Selected place:', place);
    });
}

// Debugging log to confirm script loading
console.log("Waiting for Google Maps API to load...");

// double chek DOM is fully loaded 
document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('search_input');

    searchInput.addEventListener('input', function() {     //captures user input
        const input = this.value;
        if (input.length > 2) {  // Start searching after user types at least 3 characters
            fetchAutocompleteSuggestions(input);
        }
    });
});

// Fetch autocomplete suggestions 
function fetchAutocompleteSuggestions(input) {
    const apiUrl = 'https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${encodeURIComponent(input)}&key=${apiKey}';

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            displaySuggestions(data.predictions);
        })
        .catch(error => {
            console.error('Error fetching autocomplete suggestions:', error);
        });
}

// Display the suggestions on the page
function displaySuggestions(predictions) {
    const resultsContainer = document.getElementById('autocomplete-results');
    resultsContainer.innerHTML = '';

    predictions.forEach(prediction => {
        const suggestion = document.createElement('div');
        suggestion.textContent = prediction.description;
        resultsContainer.appendChild(suggestion);
    });
}