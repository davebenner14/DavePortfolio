document.addEventListener("DOMContentLoaded", function () {
  const iconMapping = {
    javascript: "assets/icons/javascript.png",
    html: "assets/icons/html.png",
    css: "assets/icons/css.png",
    vercel: "assets/icons/vercel.png",
    laravel: "assets/icons/laravel.png",
    php: "assets/icons/php.png",
    sqlite: "assets/icons/SQlite.png",
    tailwind: "assets/icons/tailwind.png",
    phaser: "assets/icons/phaser.png",
    vue: "assets/icons/Vue.png",
    react: "assets/icons/react.png",
    node: "assets/icons/node.png",
    mongodb: "assets/icons/mongodb.png",
    expressjs: "assets/icons/Expressjs.png",
    django: "assets/icons/django.png",
    aws: "assets/icons/aws.png",
    python: "assets/icons/python.png"
  };

  const docMapping = {
    javascript: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    html: "https://developer.mozilla.org/en-US/docs/Web/HTML",
    css: "https://developer.mozilla.org/en-US/docs/Web/CSS",
    vercel: "https://vercel.com/docs",
    laravel: "https://laravel.com/docs",
    php: "https://www.php.net/manual/en/",
    sqlite: "https://sqlite.org/docs.html",
    tailwind: "https://tailwindcss.com/docs",
    phaser: "https://phaser.io/docs/2.6.2/index",
    vue: "https://vuejs.org",
    react: "https://reactjs.org/",
    node: "https://nodejs.org/en/docs/",
    mongodb: "https://docs.mongodb.com/",
    expressjs: "https://expressjs.com/",
    django: "https://docs.djangoproject.com/en/stable/",
    aws: "https://aws.amazon.com/documentation/",
    python: "https://docs.python.org/3/"
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

        if (lang === "sqlite" || lang === "tailwind") {
          img.classList.add("white-background-icon");
        }

        if (lang === "vercel") {
          img.classList.add("vercel-icon");
        }

        anchor.appendChild(img);
        iconContainer.appendChild(anchor);
      }
    });

    card.addEventListener("mouseover", function () {
      // Hide icons and buttons from other projects
      projectCards.forEach((otherCard) => {
        if (otherCard !== card) {
          const otherIcons = otherCard.querySelector(".tech-icons");
          const otherButtons = otherCard.querySelector(".project-buttons");
          otherIcons.style.opacity = "0";
          otherButtons.style.opacity = "0";
        }
      });

      // Show icons and buttons for the currently hovered project
      const icons = card.querySelector(".tech-icons");
      const buttons = card.querySelector(".project-buttons");
      icons.style.opacity = "1";
      buttons.style.opacity = "1";
    });
  });
});
