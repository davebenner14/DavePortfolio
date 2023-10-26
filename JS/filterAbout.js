$(document).ready(function () {
  $(".about-filter-button").click(function () {
    const filterType = $(this).attr("data-filter");
    $(".about-filter-button").removeClass("active");
    $(this).addClass("active");
    $(".about-content").addClass("hidden");
    $(`#${filterType}-version`).removeClass("hidden");
  });
});
