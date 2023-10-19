/*------------ Constants ------------*/
const roles = [
  "Software Engineer",
  "Game Developer",
  "Full Stack Developer",
  "Website Developer",
  "Problem Solver",
  "Coffee-Enthusiast",
  "Gamer",
  "Cat Dad",
  "Game Presserverist"
];

/*------------ Variables ------------*/
let index = 0;
let deleting = false;

/*---- Cached Element References ----*/
const rolesEl = document.getElementById("roles");

/*---- Functions ------------*/
function init() {
  typeText();
}

function typeText() {
  const role = roles[index % roles.length];
  const currentRole = rolesEl.textContent;

  if (deleting) {
    if (currentRole.length > 0) {
      rolesEl.textContent = currentRole.slice(0, -1);
      setTimeout(typeText, 100);
    } else {
      deleting = false;
      index = (index + 1) % roles.length;
      setTimeout(typeText, 500);
    }
  } else {
    if (currentRole !== role) {
      if (currentRole.length < role.length) {
        rolesEl.textContent = role.slice(0, currentRole.length + 1);
        setTimeout(typeText, 100);
      } else {
        deleting = true;
        setTimeout(typeText, 1000);
      }
    } else {
      deleting = true;
      setTimeout(typeText, 1000);
    }
  }
}

/*------------ Initialization ------------*/
init();
