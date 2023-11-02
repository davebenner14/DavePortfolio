// JavaScript to toggle mobile nav
document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.querySelector(".hamburger-container .hamburger");
  const mobileNav = document.querySelector(".nav-mobile");

  hamburger.addEventListener("click", function () {
    this.classList.toggle("is-active");
    mobileNav.classList.toggle("is-active");
  });
});
