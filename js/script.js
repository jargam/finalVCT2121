$(document).ready(function () {
  $("a.stacked").on("click", function () {
    $("article").addClass("stacked");
  });
  $("a.gridded").on("click", function () {
    $("article").removeClass("stacked");
  });
});
