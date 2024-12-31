// Wait for the DOM to load
document.addEventListener("DOMContentLoaded", () => {
    const exploreButton = document.getElementById("explore-btn");

    // Scroll to the About section when "Explore More" is clicked
    exploreButton.addEventListener("click", () => {
        document.querySelector("#about").scrollIntoView({ behavior: "smooth" });
    });
});
