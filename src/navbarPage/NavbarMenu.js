const menuToggle = document.querySelector(".menu-toggle input");
const navbarMenu = document.querySelector(".navbar-menu");

menuToggle.addEventListener("click", function () {
  navbarMenu.classList.toggle("slide");
});
