// scripts/pageCounter.js

document.addEventListener("DOMContentLoaded", function () {
    // Check if localStorage is supported
    if (typeof Storage !== "undefined") {
        // Get the current visit count from localStorage
        let visitCount = localStorage.getItem("visitCount");

        // If visitCount is null, set it to 0
        if (visitCount === null) {
            visitCount = 0;
        }

        // Increment the visit count
        visitCount++;

        // Display the visit count on the page
        document.getElementById("visitCounter").textContent = visitCount;

        // Update the visit count in localStorage
        localStorage.setItem("visitCount", visitCount.toString());
    } else {
        console.log("localStorage is not supported.");
    }
});
