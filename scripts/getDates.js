// getDates.js

document.addEventListener('DOMContentLoaded', function () {
    // Dynamically set the current year in the footer
    document.getElementById('year').textContent = new Date().getFullYear();

    // Dynamically set the last modified date in the second paragraph
    document.getElementById('lastModified').textContent = 'Last Modified: ' + document.lastModified;

    // Toggle the navigation menu on mobile view
    const menuToggle = document.getElementById('menu-toggle');
    const nav = document.querySelector('nav');

    menuToggle.addEventListener('click', function () {
        nav.classList.toggle('show-menu');
    });

    // Toggle dark mode
    const darkModeToggle = document.getElementById('dark-mode-toggle');
    const main = document.querySelector('main');

    darkModeToggle.addEventListener('click', function () {
        main.classList.toggle('dark-mode');
        nav.classList.toggle('dark-mode');
    });
});
