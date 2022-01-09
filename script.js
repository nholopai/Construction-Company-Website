const close = document.getElementById("close");
const open = document.getElementById("open");
const nav = document.getElementById("nav");
const navLinks = document.getElementById("nav-links");

// Click button to toggle down nav
open.addEventListener("click", () => {
  navLinks.classList.toggle("nav-hidden");
});

// Hide navigation when scrolling down

window.addEventListener("scroll", () => {
  if (navLinks.classList.contains("nav-hidden")) {
    navLinks.classList.remove("nav-hidden");
  }
});

// Mobile view back to top button

const upButton = document.getElementById("up");

upButton.addEventListener("click", () => {
  document.body.scrollTop = 0; // Safari
  document.documentElement.scrollTop = 0; // Chrome, Firefox etc.
  behavior: "smooth";
});
