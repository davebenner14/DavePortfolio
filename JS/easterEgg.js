document.addEventListener("DOMContentLoaded", function () {
  const easterEgg = document.querySelector(".easter-egg");
  let isEasterEggVisible = false;

  easterEgg.addEventListener("click", function () {
    isEasterEggVisible = !isEasterEggVisible;
    easterEgg.querySelector(".easter-egg-text").style.display =
      isEasterEggVisible ? "block" : "none";
  });
});
