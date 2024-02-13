const url = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json';
const cards = document.querySelector('#cards');

async function getProphetData() {
  try {
    const response = await fetch(url);
    const data = await response.json();
    console.table(data); // Check the data in the console
    displayProphets(data.prophets);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

const displayProphets = (prophets) => {
  prophets.forEach((prophet) => {
    const card = document.createElement('section');
    const fullName = document.createElement('h2');
    const portrait = document.createElement('img');

    fullName.textContent = `${prophet.name} ${prophet.lastname}`;

    const birthDate = document.createElement('p');
    birthDate.textContent = `Birthdate: ${prophet.birthdate}`;

    const birthPlace = document.createElement('p');
    birthPlace.textContent = `Birthplace: ${prophet.birthplace}`;
    
    portrait.setAttribute('src', prophet.imageurl);
    portrait.setAttribute('alt', `${prophet.name} ${prophet.lastname}`);
    portrait.setAttribute('loading', 'lazy');
    portrait.setAttribute('width', '200'); // Adjust width as needed
    portrait.setAttribute('height', '300'); // Adjust height as needed

    card.appendChild(fullName);
    card.appendChild(birthDate); // Add birth date to the card
    card.appendChild(birthPlace); // Add birth place to the card
    card.appendChild(portrait);
    
    cards.appendChild(card);
  });
};

getProphetData(); // Call the function to fetch and display data
