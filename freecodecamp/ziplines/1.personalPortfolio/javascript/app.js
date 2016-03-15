$(window).load(function(){
  var height;
  var aboutWidth = $("#section-about").width();
    if (aboutWidth >= 713){
      height = $(".about-text").outerHeight();
      $(".new").height(height);
    }
    else if (aboutWidth < 713 && aboutWidth > 647){
      height = $(".about-text").outerHeight() + $(".connect").outerHeight();
      $(".new").height(height);
    }
    else if (aboutWidth <= 647){
      height = $(".about-text").outerHeight();
      $(".new").height(height);
      $("#section-about").css("padding-bottom", height);
    }

  $(window).resize(function(){
    var aboutWidth = $("#section-about").width();
    if (aboutWidth >= 713){
      height = $(".about-text").outerHeight();
      $(".new").height(height);
      $("#section-about").css("padding-bottom", 40);
    }
    else if (aboutWidth < 713 && aboutWidth > 647){
      height = $(".about-text").outerHeight() + $(".connect").outerHeight();
      $(".new").height(height);
      $("#section-about").css("padding-bottom", 40);
    }
    else if (aboutWidth <= 647){
      height = $(".about-text").outerHeight();
      $(".new").height(height);
      $("#section-about").css("padding-bottom", height);
    }
    
  });
});