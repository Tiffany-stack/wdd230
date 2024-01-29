// discover.js

document.addEventListener('DOMContentLoaded', function () {
    // Lazy load images on scroll
    let images = document.querySelectorAll('.main-area img');

    const lazyLoad = target => {
        const io = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    const src = img.getAttribute('data-src');

                    img.setAttribute('src', src);
                    observer.disconnect();
                }
            });
        });

        io.observe(target);
    };

    images.forEach(image => {
        lazyLoad(image);
    });

    // Display visit messages in the sidebar
    const sidebar = document.querySelector('.sidebar');
    const visitMessage = document.createElement('p');
    visitMessage.id = 'visit-message';
    sidebar.appendChild(visitMessage);

    const lastVisitDate = localStorage.getItem('lastVisitDate');

    if (!lastVisitDate) {
        visitMessage.textContent = "Welcome! Let us know if you have any questions.";
    } else {
        const currentDate = new Date().getTime();
        const daysDifference = Math.floor((currentDate - lastVisitDate) / (1000 * 60 * 60 * 24));

        if (daysDifference === 1) {
            visitMessage.textContent = "You last visited 1 day ago.";
        } else if (daysDifference < 1) {
            visitMessage.textContent = "Back so soon! Awesome!";
        } else {
            visitMessage.textContent = `You last visited ${daysDifference} ${daysDifference === 1 ? 'day' : 'days'} ago.`;
        }
    }

    // Save current visit date to localStorage
    localStorage.setItem('lastVisitDate', new Date().getTime());
});
