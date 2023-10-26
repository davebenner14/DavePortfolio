document.addEventListener("DOMContentLoaded", function () {
  const filterButtons = document.querySelectorAll(".skills-filter-button");
  filterButtons.forEach((button) => {
    button.addEventListener("click", function (event) {
      filterButtons.forEach((btn) => btn.classList.remove("active"));
      this.classList.add("active");
      const filterValue = this.getAttribute("data-filter");
      const badges = document.querySelectorAll(".badge");
      if (filterValue === "all") {
        badges.forEach((badge) => (badge.style.display = "inline-block"));
        return;
      }
      badges.forEach((badge) => {
        if (badge.classList.contains(filterValue)) {
          badge.style.display = "inline-block";
        } else {
          badge.style.display = "none";
        }
      });
    });
  });
});
