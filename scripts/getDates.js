document.addEventListener('DOMContentLoaded', function () {
    // Dynamically set the current year in the footer
    document.getElementById('year').textContent = new Date().getFullYear();

    // Dynamically set the last modified date in the second paragraph
    document.getElementById('lastModified').textContent = 'Last Modified: ' + document.lastModified;
});
