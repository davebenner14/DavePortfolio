document.addEventListener("DOMContentLoaded", function () {
  const easterEgg = document.querySelector(".easter-egg");
  const easterEggText = document.querySelector(".easter-egg-text");
  const marioGif = document.getElementById("mario-gif");
  let clickCount = 0;

  easterEgg.addEventListener("click", function () {
    clickCount++;

    if (clickCount === 1) {
      // Display Mario GIF
      marioGif.style.display = "block";

      // Animate Mario walking from left to right
      marioGif.animate(
        [
          { left: "0" },
          { left: "50%" } // Adjust final position under the box
        ],
        {
          duration: 3000, // 3 seconds
          fill: "forwards"
        }
      );

      // Wait 3 seconds, then show text box
      setTimeout(() => {
        easterEggText.style.display = "block";
      }, 3000);
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
