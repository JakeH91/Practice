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






  var picHeight = $(".pic").height();
  var picWidth = $(".pic").width(picHeight);
  var textWidth = $(".text").width($(".news").width() - picHeight - 20);




/* Here I am attempting to remove upper border of upmost news div when .stuff is scrolled down, to prevent current issue of white line displaying over the box-shadow of .stuff */

  // function isFullyDisplayed(element) {
  //   var newsPos = element.offset();
  //   var newsTop = newsPos.top;
  //   // console.log(newsTop);
  //   var stuffPos = $(".stuff").offset();
  //   var stuffTop = stuffPos.top;
  //   // console.log(stuffTop);
  //   if(newsTop < stuffTop) {
  //     return false;
  //   }
  //   else {
  //     return true;
  //   }
  // }

  // function isCloseToTop(element) {
  //   var newsPos = element.offset();
  //   var newsTop = newsPos.top;
  //   console.log(newsTop);
  //   var stuffPos = $(".stuff").offset();
  //   var stuffTop = stuffPos.top;
  //   console.log(stuffTop);
  //   if(newsTop < (stuffTop + 5)) {
  //     return false;
  //   }
  //   else {
  //     return true;
  //   }
  // }



  // $(".stuff").scroll(function() {
  //   if(isFullyDisplayed($(".first")) === false){
  //     $(".first").next().addClass("next");
  //   }
  //   else if(isCloseToTop($(".next"))){
  //     $(".next").prev().removeClass("first");
  //     $(".next").addClass("first").removeClass("next");
  //   }
  // }) 

           /*  ABONDONED!!  */ 

  





  /* ON RESIZE */
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
    var picHeight = $(".pic").height();
    var picWidth = $(".pic").width(picHeight);
    var textWidth = $(".text").width($(".news").width() - picHeight - 20);
  });
});