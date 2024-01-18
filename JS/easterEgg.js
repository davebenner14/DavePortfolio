document.addEventListener("DOMContentLoaded", function () {
  const easterEgg = document.querySelector(".easter-egg");
  const easterEggText = document.querySelector(".easter-egg-text");
  const marioGif = document.getElementById("mario-gif");
  let clickCount = 0;

  easterEgg.addEventListener("click", function () {
    clickCount++;

    if (clickCount === 1) {
      // Animate Mario GIF
      marioGif.style.display = "block";
      // Example animation: move Mario from left to center
      marioGif.animate(
        [{ transform: "translateX(-100%)" }, { transform: "translateX(0)" }],
        {
          duration: 1000, // Animation duration in milliseconds
          fill: "forwards" // Keeps the state at the end of the animation
        }
      ).onfinish = () => {
        // Show text box after Mario animation finishes
        easterEggText.style.display = "block";
      };
    } else if (clickCount === 2) {
      activateFunMode();
      easterEggText.style.display = "none";
    } else {
      revertToProfessionalMode();
      clickCount = 0; // Reset click count
    }
  });

  function activateFunMode() {
    // Fun mode logic
  }

  function revertToProfessionalMode() {
    // Revert to professional mode logic
  }
});
