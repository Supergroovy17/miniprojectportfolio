// Get the logo element
var logo = document.getElementById("logo");

// Add a click event listener to the logo
logo.addEventListener("click", function() {
    // Toggle the 'spin-animation' class on click
    logo.classList.toggle("spin-animation");
});