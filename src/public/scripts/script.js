// Define environment-specific URLs
const productionUrl = 'https://get-youtube-subscriber-project-almax-1.onrender.com';
const developmentUrl = 'http://localhost:3000';

// Function to fetch subscribers data
function fetchSubscribersData() {
    const url = isProductionEnvironment() ? `${productionUrl}/subscribers` : `${developmentUrl}/subscribers`;
    fetchAndDisplayData(url);
}

// Function to fetch subscriber names
function fetchSubscriberNames() {
    const url = isProductionEnvironment() ? `${productionUrl}/subscribers/names` : `${developmentUrl}/subscribers/names`;
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

// Function to fetch subscriber data by ID
function fetchSubscriberDataById() {
    const inputId = document.getElementById('input-id').value;
    const url = isProductionEnvironment() ? `${productionUrl}/subscribers/${inputId}` : `${developmentUrl}/subscribers/${inputId}`;
    fetchAndDisplayData(url);
}

// Function to check if the environment is production
function isProductionEnvironment() {
    return window.location.hostname === 'get-youtube-subscriber-project-almax-1.onrender.com';
}

// Function to make AJAX request to fetch data
function fetchAndDisplayData(url) {
    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Subscriber not found');
            }
            return response.json();
        })
        .then(data => {
            const subscriberDataElement = document.getElementById('subscriber-data');
            subscriberDataElement.innerHTML = '';

            if (Array.isArray(data)) {
                data.forEach(subscriber => {
                    const subscriberElement = document.createElement('div');
                    subscriberElement.innerHTML = `
                        <p>Subscriber ID: ${subscriber._id}</p>
                        <p>Name: ${subscriber.name}</p>
                        <p>Subscribed Channel: ${subscriber.subscribedChannel}</p>
                        <p>Subscribed Date: ${subscriber.subscribedDate}</p>
                    `;
                    subscriberDataElement.appendChild(subscriberElement);
                });
            } else {
                subscriberDataElement.innerHTML = `
                    <p>Subscriber ID: ${data._id}</p>
                    <p>Name: ${data.name}</p>
                    <p>Subscribed Channel: ${data.subscribedChannel}</p>
                    <p>Subscribed Date: ${data.subscribedDate}</p>
                `;
            }
        })
        .catch(error => {
            console.error('Error fetching data:', error);
            alert('Subscriber not found');
            const subscriberDataElement = document.getElementById('subscriber-data');
            subscriberDataElement.innerHTML = '<p style="color: red;">Subscriber not found</p>';
        });
}

