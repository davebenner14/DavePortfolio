document.addEventListener("DOMContentLoaded", function () {
  // Get all filter buttons
  const filterButtons = document.querySelectorAll(".filter-button");

  // Add click event listeners to each filter button
  filterButtons.forEach((button) => {
    button.addEventListener("click", function (event) {
      // Remove active class from all filter buttons
      filterButtons.forEach((btn) => btn.classList.remove("active"));

      // Add active class to the clicked button
      this.classList.add("active");

      // Get the data-filter value of the clicked button
      const filterValue = this.getAttribute("data-filter");

      // Get all the badges
      const badges = document.querySelectorAll(".badge");

      // Show all badges if the filter is "all"
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
