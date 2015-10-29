$(document).ready(function() {
  $("<h1>", {
    text: "Bigger HEADING!"
  }).prependTo("article");
  
  $("<p>", {
    text: "Tiny extra wordlings."
  }).insertBefore("p:last-child");

});