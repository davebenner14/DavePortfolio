document.addEventListener("DOMContentLoaded", function () {
  const iconMapping = {
    javascript: "assets/icons/javascript.png",
    html: "assets/icons/html.png",
    css: "assets/icons/css.png",
    vercel: "assets/icons/vercel.png",
    laravel: "assets/icons/laravel.png",
    php: "assets/icons/php.png",
    sqlite: "assets/icons/SQlite.png",
    tailwind: "assets/icons/tailwind.png"
  };

  const docMapping = {
    javascript: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    html: "https://developer.mozilla.org/en-US/docs/Web/HTML",
    css: "https://developer.mozilla.org/en-US/docs/Web/CSS",
    vercel: "https://vercel.com/docs",
    laravel: "https://laravel.com/docs",
    php: "https://www.php.net/manual/en/",
    sqlite: "https://sqlite.org/docs.html",
    tailwind: "https://tailwindcss.com/docs"
  };

  const projectCards = document.querySelectorAll(".project-card");

  projectCards.forEach((card) => {
    const languages = card.getAttribute("data-language").split(",");
    const iconContainer = card.querySelector(".tech-icons");

    languages.forEach((lang) => {
      if (iconMapping[lang]) {
        const anchor = document.createElement("a");
        anchor.href = docMapping[lang];
        anchor.target = "_blank";
        anchor.rel = "noopener noreferrer";

        const img = document.createElement("img");
        img.src = iconMapping[lang];
        img.alt = `${lang} icon`;

        if (lang === "vercel") {
          img.classList.add("vercel-icon");
        }

        anchor.appendChild(img);
        iconContainer.appendChild(anchor);
      }
    });
  });

  const projectScreenshots = document.querySelectorAll(".project-screenshot");

  projectScreenshots.forEach((screenshot) => {
    screenshot.addEventListener("mouseover", function () {
      const icons = this.nextElementSibling;
      const buttons = icons.nextElementSibling;

      icons.style.opacity = "1";
      buttons.style.opacity = "1";

      setTimeout(() => {
        icons.style.opacity = "0";
        buttons.style.opacity = "0";
      }, 5000);
    });
  });
});
