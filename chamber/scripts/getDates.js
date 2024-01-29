document.addEventListener('DOMContentLoaded', function () {
    // Dynamically set the current year in the footer
    document.getElementById('year').textContent = new Date().getFullYear();

    // Get the last visit date from localStorage
    let lastVisit = localStorage.getItem('lastVisit');

    // Check if it's the first visit
    if (!lastVisit) {
        document.querySelector('.sidebar').innerHTML = '<p>Welcome! Let us know if you have any questions.</p>';
    } else {
        // Calculate the time between visits
        let timeDiff = new Date().getTime() - lastVisit;
        let daysDiff = Math.floor(timeDiff / (1000 * 60 * 60 * 24));

        if (daysDiff === 0) {
            document.querySelector('.sidebar').innerHTML = '<p>Back so soon! Awesome!</p>';
        } else {
            let message = (daysDiff === 1) ? 'day' : 'days';
            document.querySelector('.sidebar').innerHTML = `<p>You last visited ${daysDiff} ${message} ago.</p>`;
        }
    }

    // Store the current date in localStorage
    localStorage.setItem('lastVisit', Date.now());
});
