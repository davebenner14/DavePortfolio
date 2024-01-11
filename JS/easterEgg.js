document.addEventListener("DOMContentLoaded", function () {
  const easterEgg = document.querySelector(".easter-egg");
  const easterEggText = document.querySelector(".easter-egg-text");

  easterEgg.addEventListener("mouseenter", function () {
    easterEggText.style.display = "block";
  });

  easterEgg.addEventListener("mouseleave", function () {
    easterEggText.style.display = "none";
  });
});
