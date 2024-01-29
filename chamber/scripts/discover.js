// discover.js

document.addEventListener('DOMContentLoaded', function () {
    console.log("DOMContentLoaded event fired");

    // Lazy load images on scroll
    let images = document.querySelectorAll('.main-area img');

    const lazyLoad = target => {
        console.log("Lazy loading images");
        // ... (rest of your lazy loading code)
    };

    images.forEach(image => {
        lazyLoad(image);
    });

    // Display visit messages in the sidebar
    const visitMessage = document.getElementById('visit-message');
    const lastVisitDate = localStorage.getItem('lastVisitDate');

    if (!lastVisitDate) {
        console.log("First visit");
        visitMessage.textContent = "Welcome! Let us know if you have any questions.";
    } else {
        const currentDate = new Date().getTime();
        const daysDifference = Math.floor((currentDate - lastVisitDate) / (1000 * 60 * 60 * 24));

        if (daysDifference === 1) {
            console.log("Visited 1 day ago");
            visitMessage.textContent = "You last visited 1 day ago.";
        } else if (daysDifference < 1) {
            console.log("Visited less than a day ago");
            visitMessage.textContent = "Back so soon! Awesome!";
        } else {
            console.log(`Visited ${daysDifference} days ago`);
            visitMessage.textContent = `You last visited ${daysDifference} days ago.`;
        }
    }

    // Save current visit date to localStorage
    localStorage.setItem('lastVisitDate', new Date().getTime());
});
