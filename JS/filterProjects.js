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

    let shouldShow = false;

    // If a genre is provided and matches the card's genre, set shouldShow to true
    if (genre && cardGenre.includes(genre)) {
      shouldShow = true;
      console.log(`Matched by genre: ${cardGenre}`); // Log the matching genre
    }

    // If a language is provided and matches the card's language, set shouldShow to true
    if (language && cardLanguage.includes(language)) {
      shouldShow = true;
      console.log(`Matched by language: ${cardLanguage}`); // Log the matching language
    }

    // If neither genre nor language is provided/matched, hide the card
    if (!genre && !language) {
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
