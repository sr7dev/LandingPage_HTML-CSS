$(document).ready(function() {
  $("button.burger-class").on("click", function() {
    $(".sections.nav-sections").css("display", "flex");
  });

  $("span.ui-menu-icon.ui-icon.ui-icon-carat-1-e").on("click", function(event) {
    event.stopPropagation();
    $(this).parent().parent().find("ul.level10").css("display", "flex");
  });
});