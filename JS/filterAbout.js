$(document).ready(function () {
  $(".filter-button").click(function () {
    const filterType = $(this).attr("data-filter");

    // remove active class from all buttons
    $(".filter-button").removeClass("active");

    // add active class to clicked button
    $(this).addClass("active");

    // hide all about content
    $(".about-content").addClass("hidden");

    // show the selected version
    $(`#${filterType}-version`).removeClass("hidden");
  });
});
