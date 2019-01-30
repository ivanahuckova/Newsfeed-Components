// Toggle the "menu--open" class on your menu refence.
const toggleMenu = () => {
	menu.classList.toggle("menu--open");
};

// Create a reference to the ".menu" class
const menu = document.querySelector(".menu");

// Create a reference to the ".menu-button" class
const menuButton = document.querySelector(".menu-button");

// Using your menuButton reference, add a click handler that calls toggleMenu
menuButton.addEventListener("click", () => toggleMenu());
