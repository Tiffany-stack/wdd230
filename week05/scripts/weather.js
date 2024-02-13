// select HTML elements in the document
const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

// Declare a const variable named "url" and assign it a valid URL string
const url = 'https://openweathermap.org/weathermap?basemap=map&cities=true&layer=temperature&lat=10.2981&lon=123.9528&zoom=5';

// Trier, Germany coordinates
const latitude = '49.75';
const longitude = '6.64';

// Define the query parameters
const apiKey = '48e18286a45256b1fd4d7a87bc44d7b7';
const params = `?lat=${latitude}&lon=${longitude}&units=imperial&appid=${apiKey}`;
const apiUrl = `${url}${params}`;

// Define an asynchronous function named "apiFetch()"
async function apiFetch() {
  try {
    const response = await fetch(apiUrl);

    if (response.ok) {
      const data = await response.json();
      console.log('Weather Data:', data);
      displayResults(data);
    } else {
      throw Error(await response.text());
    }
  } catch (error) {
    console.error('Error:', error);
  }
}

// Function to display weather results in HTML
function displayResults(data) {
  currentTemp.innerHTML = `${data.main.temp}&deg;F`;
  const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
  let desc = data.weather[0].description;
  weatherIcon.setAttribute('src', iconsrc);
  weatherIcon.setAttribute('alt', desc);
  captionDesc.textContent = `${desc}`;
}

// Invoke the apiFetch function
apiFetch();
