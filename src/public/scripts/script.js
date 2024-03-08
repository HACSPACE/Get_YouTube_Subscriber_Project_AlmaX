function fetchSubscribersData() {
    // Make an AJAX request to fetch all subscribers data
    // Modify the URL based on your server endpoint
    const url =  'https://get-youtube-subscriber-project-almax-1.onrender.com/subscribers';
    fetchAndDisplayData(url);
}

function fetchSubscriberNames() {
    // Make an AJAX request to fetch only subscriber names
    // Modify the URL based on your server endpoint
    const url = 'https://get-youtube-subscriber-project-almax-1.onrender.com/subscribers/names';
    fetchAndDisplayNames(url);
}

function fetchAndDisplayNames(url) {
    // Make an AJAX request to fetch the data
    fetch(url)
        .then(response => response.json())
        .then(names => {
            // Update the HTML content with the received names
            const subscriberDataElement = document.getElementById('subscriber-data');
            subscriberDataElement.innerHTML = '';

            names.forEach(nameObj => {
                const nameElement = document.createElement('div');
                nameElement.textContent = nameObj.name; // Accessing the name property
                subscriberDataElement.appendChild(nameElement);
            });
        })
        .catch(error => {
            console.error('Error fetching names:', error);
            
        });
}

function fetchSubscriberDataById() {
    // Make an AJAX request to fetch subscriber data based on ID
    const inputId = document.getElementById('input-id').value;
    const url = `https://get-youtube-subscriber-project-almax-1.onrender.com/subscribers/${inputId}`; // Update the URL with your server endpoint
    fetchAndDisplayData(url);
}

function fetchAndDisplayData(url) {
    // Make an AJAX request to fetch the data
    fetch(url)
        .then(response => response.json())
        .then(data => {
            // Update the HTML content with the received data
            const subscriberDataElement = document.getElementById('subscriber-data');
            subscriberDataElement.innerHTML = '';

            if (Array.isArray(data)) {
                // For arrays, assume it's a list of subscribers
                data.forEach(subscriber => {
                    const subscriberElement = document.createElement('div');
                    subscriberElement.innerHTML = `
                        <p>Subscriber ID: ${subscriber._id}</p>
                        <p>Name: ${subscriber.name}</p>
                        <p>Subscribed Channel: ${subscriber.subscribedChannel}</p>
                        <p>Subscribed Date: ${subscriber.subscribedDate}</p>
                        <!-- Add more data fields as needed -->
                    `;
                    subscriberDataElement.appendChild(subscriberElement);
                });
            } else {
                // For single object, assume it's a subscriber object
                subscriberDataElement.innerHTML = `
                    <p>Subscriber ID: ${data._id}</p>
                    <p>Name: ${data.name}</p>
                    <p>Subscribed Channel: ${data.subscribedChannel}</p>
                    <p>Subscribed Date: ${data.subscribedDate}</p>
                    <!-- Add more data fields as needed -->
                `;
            }
        })
        .catch(error => {
            console.error('Error fetching data:', error);
            // Handle error if needed
        });
}