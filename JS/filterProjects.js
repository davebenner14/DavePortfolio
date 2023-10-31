function showGenres() {
  document.getElementById("genres").style.display = "block";
  document.getElementById("languages").style.display = "none";
}

function showLanguages() {
  document.getElementById("languages").style.display = "block";
  document.getElementById("genres").style.display = "none";
}

function filterProjects(genre, language) {
  console.log(`Genre: ${genre}, Language: ${language}`); // Log the received values

  // Get all project cards
  const projectCards = document.querySelectorAll(".project-card");

  projectCards.forEach((card) => {
    const cardGenre = card.getAttribute("data-genre");
    const cardLanguage = card.getAttribute("data-language");

    let shouldShow = true; // By default, set to true, we'll turn it to false if conditions aren't met

    // If a genre is provided and doesn't match the card's genre, set shouldShow to false
    if (genre && !cardGenre.includes(genre)) {
      shouldShow = false;
    }

    // If a language is provided and doesn't match the card's language, set shouldShow to false
    if (language && !cardLanguage.includes(language)) {
      shouldShow = false;
    }

    // Display the card based on shouldShow value
    if (shouldShow) {
      card.classList.remove("hidden");
    } else {
      card.classList.add("hidden");
    }
  });
}

// Initial filter by "Featured" on page load
document.addEventListener("DOMContentLoaded", function () {
  filterProjects("featured", null);
});
