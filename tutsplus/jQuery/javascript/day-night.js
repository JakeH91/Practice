$(document).ready(function() {
  var link = $("link.custom");
  $("button").click(function() {
    var $this = $(this),
        stylesheet = $this.data("file");
    
    link.attr("href", "css/" + stylesheet + ".css");
    
    $this
        .siblings("button")
            .removeAttr("disabled")
            .end()
        .attr("disabled", "disabled");
  });
});