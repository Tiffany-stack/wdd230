document.addEventListener('DOMContentLoaded', function () {
    const viewToggle = document.getElementById('view-toggle');
    const membersContainer = document.getElementById('members-container');

    let viewType = 'grid-view'; // Default view type

    // Event listener for view toggle
    viewToggle.addEventListener('change', function () {
        viewType = document.querySelector('input[name="view-type"]:checked').id;
        renderMembers(); // Re-render members on view toggle
    });

    // Fetch JSON data and render members
    fetch('data/members.json')
        .then(response => response.json())
        .then(data => {
            renderMembers(data);
        })
        .catch(error => console.error('Error fetching data:', error));

    // Function to render members based on the selected view type
    function renderMembers(data) {
        membersContainer.innerHTML = ''; // Clear existing content

        if (data && data.members) {
            data.members.forEach(member => {
                const memberCard = document.createElement('div');
                memberCard.classList.add('member', viewType);

                // Customize this part based on your data structure
                memberCard.innerHTML = `
                    <h3>${member.name}</h3>
                    <p>${member.address}</p>
                    <p>${member.phone}</p>
                    <!-- Add more member information as needed -->
                `;

                membersContainer.appendChild(memberCard);
            });
        }
    }
});
