// dark-mode.js

document.addEventListener('DOMContentLoaded', function () {
    const darkModeToggle = document.getElementById('dark-mode-toggle');
    const main = document.querySelector('main');

    darkModeToggle.addEventListener('click', function () {
        main.classList.toggle('dark-mode');
    });
});
