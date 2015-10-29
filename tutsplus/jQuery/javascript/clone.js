$(document).ready(function() {

  $("h2").on("click", function() {
    $(this).clone(true).appendTo("body");
  });

});