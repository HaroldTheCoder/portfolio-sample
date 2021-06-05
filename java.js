// Fixed Navbar
window.addEventListener("scroll", function () {
	var navBar = document.querySelector("#navBar");
	var linkNav = document.querySelectorAll(".nav-link");
	var navButton = document.querySelectorAll(".bar");
	navBar.classList.toggle("active", window.scrollY > 5);
	linkNav.forEach((n) => n.classList.toggle("link-active", window.scrollY > 5));
	navButton.forEach((m) => m.classList.toggle("mobile-active", window.scrollY > 5));
});

// Button function
window.addEventListener("scroll", function () {
	var topButton = document.querySelector(".top-button");
	topButton.classList.toggle("button-active", window.scrollY > 3500);

});

// Skill-Div Parallax function
window.addEventListener("scroll", function () {
	var diV = document.querySelector("#skill-section");
	var range = document.querySelectorAll(".fill");
	var full = document.querySelectorAll(".full");
	diV.classList.toggle("div-active", window.scrollY > 2100);
	range.forEach((m) => m.classList.toggle("skill-active", window.scrollY > 2300));
	full.forEach((n) => n.classList.toggle("range-active", window.scrollY > 2300)
	);
});
// Skill-Div Parallax Mobile function 
window.addEventListener("scroll", function () {
	var diV = document.querySelector("#skill-section");
	var range = document.querySelectorAll(".fill");
	var full = document.querySelectorAll(".full");
	diV.classList.toggle("div-active-mobile", window.scrollY > 10000);
	range.forEach((m) => m.classList.toggle("skill-active-mobile", window.scrollY > 10000));
	full.forEach((n) => n.classList.toggle("range-active-mobile", window.scrollY > 10000)
	);
});
// Hamburger function
const hamburger = document.querySelector(".nav-button");
const navMenu = document.querySelector(".mobile-navigation");
hamburger.addEventListener("click", openNav);
function openNav() {
	hamburger.classList.toggle("active");
	navMenu.classList.toggle("active");
}
const navLink = document.querySelectorAll(".mobile-link");
navLink.forEach((n) => n.addEventListener("click", closeNav));
function closeNav() {
	hamburger.classList.remove("active");
	navMenu.classList.remove("active");
}

