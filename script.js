const close = document.getElementById("close");
const open = document.getElementById("open");
const nav = document.getElementById("nav");
const navLinks = document.getElementById("nav-links");

open.addEventListener("click", function() {
  navLinks.classList.toggle("nav-hidden");
});
