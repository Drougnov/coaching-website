const dropdownContainer = document.querySelector(".dropdown-container");

dropdownContainer.addEventListener("mouseenter", () => {
    dropdownContainer.classList.add("open");
});

dropdownContainer.addEventListener("mouseleave", () => {
    dropdownContainer.classList.remove("open");
});
